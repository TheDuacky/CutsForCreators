
import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { allVideos } from "@/data/creators";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface WorkedWithSectionProps {
  isPaused: boolean;
  setApi: (api: CarouselApi) => void;
}

const WorkedWithSection = ({
  isPaused,
  setApi
}: WorkedWithSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([...allVideos, ...allVideos]); // Double items for infinite scroll effect
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [isHovering, setIsHovering] = useState(false);
  const [showPreview, setShowPreview] = useState<number | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (isPaused || isHovering) return;
      
      const currentTime = Date.now();
      const elapsed = currentTime - lastUpdateTime;
      const speed = 0.01; // Adjusted speed for smoother scrolling
      const newTranslateX = translateX - elapsed * speed;

      // Reset position to create seamless loop
      if (newTranslateX <= -50) {
        setTranslateX(0);
      } else {
        setTranslateX(newTranslateX);
      }

      setLastUpdateTime(currentTime);
    };

    const animationFrame = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationFrame);
  }, [isPaused, translateX, lastUpdateTime, isHovering]);

  // Handle manual navigation
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % items.length);
    setTranslateX(prev => Math.max(prev - 16.66, -50)); // Assuming 6 items visible at once (100/6)
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + items.length) % items.length);
    setTranslateX(prev => Math.min(prev + 16.66, 0)); // Assuming 6 items visible at once (100/6)
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-[#1A1F2C] to-[#1A1F2C]/90 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgQzQ0LjggMCAwIDQ0LjggMCAxMDAgQzAgMTU1LjIgNDQuOCAyMDAgMTAwIDIwMCBDMTU1LjIgMjAwIDIwMCAxNTUuMiAyMDAgMTAwIEMyMDAgNDQuOCAxNTUuMiAwIDEwMCAwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzlCODdGNSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI1LDUiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Trusted by Leading Creators</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've helped content creators across various niches optimize their videos and grow their audience
          </p>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-full bg-purple-500/10 text-white hover:bg-purple-500/30 transition-colors"
            aria-label="Previous creators"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-purple-500/10 text-white hover:bg-purple-500/30 transition-colors"
            aria-label="Next creators"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Creator cards carousel */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={containerRef} 
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(${translateX}%)`,
              width: "200%", // Double width to accommodate two sets of items
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {items.map((video, index) => (
              <div 
                key={`${video.creator.name}-${index}`} 
                className={cn(
                  "flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2",
                  activeIndex === index % allVideos.length ? "scale-105" : ""
                )}
                style={{ minWidth: "250px", transition: "all 0.3s ease" }}
              >
                <div 
                  className="group relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
                  onMouseEnter={() => setShowPreview(index)}
                  onMouseLeave={() => setShowPreview(null)}
                >
                  {/* Creator info header */}
                  <div className="p-3 flex items-center gap-3 bg-gradient-to-r from-purple-900/40 to-transparent">
                    <a href={video.creator.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <Avatar className="w-10 h-10 ring-2 ring-purple-500/30">
                        <AvatarImage src={video.creator.image} alt={video.creator.name} />
                        <AvatarFallback className="bg-purple-900 text-white">{video.creator.name[0]}</AvatarFallback>
                      </Avatar>
                    </a>
                    <div className="flex-1">
                      <a href={video.creator.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                        <h3 className="text-sm font-semibold text-white">{video.creator.name}</h3>
                      </a>
                      <p className="text-xs text-purple-400">{video.creator.subscribers} • {video.views}</p>
                    </div>
                  </div>
                  
                  {/* Video thumbnail */}
                  <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative">
                      <AspectRatio ratio={16/9} className="bg-gray-800/50">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        
                        {/* Video title overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div className="text-white">
                            <h4 className="text-sm font-medium line-clamp-2">{video.title}</h4>
                          </div>
                        </div>
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 rounded-full bg-purple-500/80 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <Play className="w-5 h-5 text-white ml-1" />
                          </div>
                        </div>
                      </AspectRatio>
                    </div>
                  </a>
                  
                  {/* Video preview on hover (optional) */}
                  {showPreview === index && (
                    <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
                      <div className="absolute top-2 right-2 text-xs text-white bg-purple-500/50 px-2 py-1 rounded">Preview</div>
                      <img src={video.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-white mb-1">100+</div>
            <div className="text-purple-400 text-sm">Creators Served</div>
          </div>
          <div className="p-4 bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-white mb-1">500M+</div>
            <div className="text-purple-400 text-sm">Views Generated</div>
          </div>
          <div className="p-4 bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-white mb-1">48h</div>
            <div className="text-purple-400 text-sm">Avg. Turnaround</div>
          </div>
          <div className="p-4 bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-white mb-1">95%</div>
            <div className="text-purple-400 text-sm">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkedWithSection;
