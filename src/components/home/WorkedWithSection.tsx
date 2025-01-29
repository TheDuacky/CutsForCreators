import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { allVideos } from "@/data/creators";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";

interface WorkedWithSectionProps {
  isPaused: boolean;
  setApi: (api: CarouselApi) => void;
}

const WorkedWithSection = ({ isPaused, setApi }: WorkedWithSectionProps) => {
  const [items, setItems] = useState([...allVideos, ...allVideos]); // Start with double items
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (isPaused) return;

      const currentTime = Date.now();
      const elapsed = currentTime - lastUpdateTime;
      const speed = 0.015; // Pixels per millisecond
      const newTranslateX = translateX - (elapsed * speed);

      // When we reach 75% of the first set, start preparing the next set
      if (newTranslateX <= -37.5) {
        // Add new items while keeping existing ones
        setItems(prevItems => [...prevItems, ...allVideos]);
        // Reset position while maintaining visual continuity
        setTranslateX(0);
      } else {
        setTranslateX(newTranslateX);
      }
      
      // Clean up old items when they're fully off screen
      if (items.length > allVideos.length * 3) {
        setItems(prevItems => prevItems.slice(allVideos.length));
      }
      
      setLastUpdateTime(currentTime);
    };

    const animationFrame = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationFrame);
  }, [isPaused, translateX, lastUpdateTime, items.length]);

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Worked With</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted by leading content creators across various niches
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div 
          ref={containerRef}
          className="flex"
          style={{ 
            transform: `translateX(${translateX}%)`,
            width: "300%", // Triple width to allow for seamless looping
            transition: 'transform 500ms linear' // Smooth transition
          }}
        >
          {items.map((video, index) => (
            <div 
              key={`${video.creator.name}-${index}`}
              className="flex-none w-1/6 p-4"
              style={{ minWidth: "300px" }}
            >
              <div className="relative group rounded-2xl overflow-hidden bg-[#1A1F2C]/80 border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
                <div className="p-4 flex items-center gap-3">
                  <a 
                    href={video.creator.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={video.creator.image} alt={video.creator.name} />
                      <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
                    </Avatar>
                  </a>
                  <div className="flex-1">
                    <a 
                      href={video.creator.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400 transition-colors"
                    >
                      <h3 className="text-sm font-semibold text-white">{video.creator.name}</h3>
                    </a>
                    <p className="text-xs text-purple-400">{video.creator.subscribers} • {video.views}</p>
                  </div>
                </div>
                
                <a 
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-video bg-gray-800/50 relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1A1F2C]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-sm font-semibold text-white">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkedWithSection;
