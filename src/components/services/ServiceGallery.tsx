
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Image, Play, Info } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  title: string;
  description: string;
  url: string;
}

interface ServiceGalleryProps {
  items: GalleryItem[];
  serviceTitle: string;
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ items, serviceTitle }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const { toast } = useToast();

  const handleVideoPlay = (item: GalleryItem) => {
    setActiveItem(item);
    toast({
      title: "Playing video",
      description: `Now playing: ${item.title}`,
      duration: 3000,
    });
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 mb-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <Image size={24} className="text-purple-400" />
          {serviceTitle} Gallery
        </h2>
        <p className="text-gray-300 mt-2">
          Examples of our work for this service
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="overflow-hidden rounded-xl border border-purple-500/20 bg-[#232836]/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="relative">
                    <AspectRatio ratio={16/9} className="bg-muted">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                        {item.type === 'video' ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <button 
                                onClick={() => handleVideoPlay(item)}
                                className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                              >
                                <Play size={20} />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px] p-0 bg-[#1A1F2C] border-purple-500/20">
                              <div className="aspect-video w-full">
                                <iframe
                                  src={`${item.url}?autoplay=1`}
                                  title={item.title}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="w-full h-full"
                                ></iframe>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <Dialog>
                            <DialogTrigger asChild>
                              <button 
                                className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                              >
                                <Info size={20} />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px] p-0 bg-[#1A1F2C] border-purple-500/20">
                              <div className="p-0">
                                <img
                                  src={item.url}
                                  alt={item.title}
                                  className="w-full h-auto rounded-t-lg"
                                />
                                <div className="p-6">
                                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                  <p className="text-gray-300">{item.description}</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      {item.type === 'video' ? (
                        <Play size={16} className="text-purple-400" />
                      ) : (
                        <Image size={16} className="text-purple-400" />
                      )}
                      <span className="text-xs uppercase text-purple-400 font-medium">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-white font-medium line-clamp-1">{item.title}</h3>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-purple-600/80 hover:bg-purple-700 border-none text-white" />
        <CarouselNext className="right-2 bg-purple-600/80 hover:bg-purple-700 border-none text-white" />
      </Carousel>
    </div>
  );
};

export default ServiceGallery;
