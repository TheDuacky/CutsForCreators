import { Film, Youtube, Edit, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { creators, allVideos } from "@/data/creators";

const Showreel = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Work</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transforming creator content through professional editing, stunning visuals, and strategic optimization
          </p>
        </div>

        <div className="relative px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {allVideos.map((video, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <div className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full aspect-video object-cover rounded-lg transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                          <div className="flex items-center gap-4 mb-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={video.creator.image} alt={video.creator.name} />
                              <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <h3 className="font-semibold">{video.creator.name}</h3>
                              <div className="flex items-center text-sm text-gray-300">
                                <Users className="w-4 h-4 mr-1" />
                                {video.creator.subscribers}
                              </div>
                            </div>
                          </div>
                          <h4 className="text-xl font-semibold mb-2">{video.title}</h4>
                          <p className="text-gray-300 mb-2">{video.views}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Showreel;