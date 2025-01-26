import { ArrowRight, Youtube, Award, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { allVideos } from "@/data/creators";

const features = [
  {
    icon: <Youtube className="w-8 h-8 text-purple-400" />,
    title: "YouTube Optimization",
    description: "Expert editing to boost your channel's engagement and growth"
  },
  {
    icon: <Award className="w-8 h-8 text-purple-400" />,
    title: "Professional Quality",
    description: "Cinema-grade editing techniques for stunning content"
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-400" />,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising on quality"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-400" />,
    title: "Custom Effects",
    description: "Unique transitions and effects to make your content stand out"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section */}
      <div className="hero-gradient min-h-[80vh] flex items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Level Up Your
            <br />
            <span className="text-purple-400">YouTube Content</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
            Professional video editing services tailored for content creators. We help you create engaging content that stands out.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
          >
            Our Services <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine creativity with technical expertise to deliver content that engages and converts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Worked With Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-purple-500/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Worked With</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by leading content creators across various niches
          </p>
        </div>

        <div className="relative px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {allVideos.map((video, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative">
                    {/* Avatar positioned to overlap */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                      <Avatar className="w-16 h-16 border-4 border-[#1A1F2C]">
                        <AvatarImage src={video.creator.image} alt={video.creator.name} />
                        <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    {/* Card content */}
                    <div className="pt-10 bg-black/20 rounded-lg overflow-hidden">
                      {/* Creator info */}
                      <div className="text-center px-4 pb-4">
                        <h3 className="text-lg font-semibold text-white">{video.creator.name}</h3>
                        <p className="text-purple-400">{video.creator.subscribers} Subscribers</p>
                      </div>
                      
                      {/* Video thumbnail with hover effect */}
                      <div className="relative group">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-center p-4">
                            <h4 className="text-white font-semibold mb-2">{video.title}</h4>
                            <p className="text-gray-300">{video.views}</p>
                          </div>
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

export default Home;