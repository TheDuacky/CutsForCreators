import { ArrowRight, Youtube, Award, Clock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
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
import { useEffect, useState } from "react";

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress((currentProgress / totalScroll) * 100);

      // Parallax effect for gradient orbs
      const orbs = document.querySelectorAll('.gradient-orb');
      orbs.forEach((orb) => {
        const speed = 0.15;
        const yPos = -(window.scrollY * speed);
        (orb as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }} 
      />

      {/* Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      {/* Gradient Lines */}
      <div className="gradient-line" style={{ left: '10%' }} />
      <div className="gradient-line" style={{ right: '10%' }} />

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Worked With</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by leading content creators across various niches
          </p>
        </div>

        <div className="relative px-12 pb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {allVideos.map((video, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pt-12 pb-4">
                  <div className="relative group">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-10">
                      <Avatar className="w-24 h-24 border-4 border-[#1A1F2C] shadow-lg">
                        <AvatarImage src={video.creator.image} alt={video.creator.name} />
                        <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="pt-16 rounded-2xl overflow-hidden bg-purple-500/20 border border-purple-500/20 shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-purple-500/30">
                      <div className="text-center px-6 pb-6">
                        <h3 className="text-xl font-semibold text-white mb-1">{video.creator.name}</h3>
                        <p className="text-purple-400">{video.creator.subscribers}</p>
                      </div>
                      
                      <div className="relative aspect-video">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1A1F2C]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-white font-semibold mb-2">{video.title}</h4>
                            <p className="text-purple-400">{video.views}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-purple-500 hover:bg-purple-600 text-white border-none transition-colors">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="bg-purple-500 hover:bg-purple-600 text-white border-none transition-colors">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;