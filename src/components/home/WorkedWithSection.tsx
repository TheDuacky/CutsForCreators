import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { allVideos } from "@/data/creators";
import { type CarouselApi } from "@/components/ui/carousel";

interface WorkedWithSectionProps {
  isPaused: boolean;
  setApi: (api: CarouselApi) => void;
}

const WorkedWithSection = ({ isPaused, setApi }: WorkedWithSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Worked With</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted by leading content creators across various niches
        </p>
      </div>

      <div className="relative">
        <Carousel 
          className="w-full"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            draggable: false,
          }}
        >
          <CarouselContent>
            {allVideos.map((video, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default WorkedWithSection;