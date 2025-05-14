
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { allVideos } from "@/data/creators";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const WorkedWithSection = () => {
  const [showPreview, setShowPreview] = useState<number | null>(null);
  
  // Select just the first 8 videos for a static display
  const displayedVideos = allVideos.slice(0, 8);

  return (
    <div className="w-full py-16 bg-[#F1F1F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333]">Trusted by Leading Creators</h2>
          <p className="text-[#8E9196] max-w-2xl mx-auto">
            We've helped content creators across various niches optimize their videos
          </p>
        </div>

        {/* Creator cards in a simple grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedVideos.map((video, index) => (
            <div 
              key={`${video.creator.name}-${index}`} 
              className={cn(
                "relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
              )}
              onMouseEnter={() => setShowPreview(index)}
              onMouseLeave={() => setShowPreview(null)}
            >
              {/* Creator info header */}
              <div className="p-3 flex items-center gap-3">
                <a href={video.creator.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Avatar className="w-8 h-8 border border-gray-200">
                    <AvatarImage src={video.creator.image} alt={video.creator.name} />
                    <AvatarFallback className="bg-gray-100 text-gray-600">{video.creator.name[0]}</AvatarFallback>
                  </Avatar>
                </a>
                <div className="flex-1">
                  <a href={video.creator.profileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1EAEDB] transition-colors">
                    <h3 className="text-xs font-semibold text-[#333] truncate">{video.creator.name}</h3>
                  </a>
                  <p className="text-xs text-[#8E9196]">{video.creator.subscribers}</p>
                </div>
              </div>
              
              {/* Video thumbnail */}
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative">
                  <AspectRatio ratio={16/9} className="bg-gray-50">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </AspectRatio>
                  
                  {/* Simple play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/10">
                    <div className="px-3 py-2 bg-white/90 rounded-md text-xs font-medium text-[#333]">
                      Watch
                    </div>
                  </div>
                </div>
              </a>
              
              {/* Video title */}
              <div className="p-3">
                <h4 className="text-xs text-[#333] font-medium line-clamp-1">{video.title}</h4>
                <p className="text-xs text-[#8E9196] mt-1">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section - simplified */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-[#333] mb-1">100+</div>
            <div className="text-[#8E9196] text-sm">Creators</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-[#333] mb-1">500M+</div>
            <div className="text-[#8E9196] text-sm">Views</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-[#333] mb-1">48h</div>
            <div className="text-[#8E9196] text-sm">Turnaround</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-[#333] mb-1">95%</div>
            <div className="text-[#8E9196] text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkedWithSection;
