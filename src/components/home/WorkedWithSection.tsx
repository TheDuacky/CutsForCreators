import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { allVideos } from "@/data/creators";
const WorkedWithSection = () => {
  // Select just the first 4 videos for a more compact display
  const displayedVideos = allVideos.slice(0, 4);
  return <div className="w-full py-10 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h2 className="font-bold mb-2 text-white text-4xl">Trusted by Creators</h2>
          <p className="max-w-md mx-auto text-base text-gray-300">
            Optimizing content for creators across various platforms
          </p>
        </div>

        {/* Creator cards in a compact grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {displayedVideos.map((video, index) => <a key={`${video.creator.name}-${index}`} href={video.creator.profileUrl} target="_blank" rel="noopener noreferrer" className="bg-[#222632]/50 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#252A37]/70 border border-[#333845]">
              <div className="p-3 flex items-center gap-2">
                <Avatar className="w-6 h-6 border border-[#333845]">
                  <AvatarImage src={video.creator.image} alt={video.creator.name} />
                  <AvatarFallback className="bg-[#333845] text-[#9b87f5]">{video.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-xs font-medium text-white truncate">{video.creator.name}</h3>
                  <p className="text-[0.65rem] text-[#8E9196]">{video.creator.subscribers}</p>
                </div>
              </div>
            </a>)}
        </div>
      </div>
    </div>;
};
export default WorkedWithSection;