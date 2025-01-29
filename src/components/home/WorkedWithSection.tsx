import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { allVideos } from "@/data/creators";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface WorkedWithSectionProps {
  isPaused: boolean;
  setApi: (api: CarouselApi) => void;
}

const WorkedWithSection = ({ isPaused, setApi }: WorkedWithSectionProps) => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 30000; // 30 seconds for one complete loop

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      setTranslateX(-100 * progress);
    };

    const animationFrame = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationFrame);
  }, []);

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
          className="flex"
          style={{ 
            transform: `translateX(${translateX}%)`,
            transition: 'transform 1000ms linear',
            width: "200%", // Double width to allow for seamless looping
          }}
        >
          {/* Render items twice for seamless loop */}
          {[...allVideos, ...allVideos].map((video, index) => (
            <div 
              key={index} 
              className="flex-none w-1/6 p-4"
              style={{ minWidth: "300px" }}
            >
              <div className="relative group rounded-2xl overflow-hidden bg-[#1A1F2C]/80 border border-purple-500/20">
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={video.creator.image} alt={video.creator.name} />
                    <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white">{video.creator.name}</h3>
                    <p className="text-xs text-purple-400">{video.creator.subscribers} • {video.views}</p>
                  </div>
                </div>
                
                <div className="aspect-video bg-gray-800/50">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1A1F2C]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center p-3">
                      <h4 className="text-sm font-semibold text-white">{video.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkedWithSection;