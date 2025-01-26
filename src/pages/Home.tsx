import { ArrowRight, Youtube, Award, Clock, Sparkles, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
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
import { contentTypes, CAROUSEL_INTERVAL, type ContentType } from "@/data/content-types";
import { Button } from "@/components/ui/button";

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
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [totalRotations, setTotalRotations] = useState(0);

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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => {
        const nextIndex = (prev + 1) % contentTypes.length;
        if (nextIndex === 0) {
          setTotalRotations(r => r + 1);
        }
        return nextIndex;
      });
    }, CAROUSEL_INTERVAL / 2);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Get the current content for description
  const currentDescription = contentTypes[currentContentIndex].description;

  // Calculate the total offset based on current index and total rotations
  const totalOffset = (totalRotations * contentTypes.length + currentContentIndex) * 100;

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

      {/* Hero Section with Vertical Content Carousel */}
      <div className="hero-gradient min-h-[80vh] flex items-center justify-center text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Level Up Your
            <br />
            <div className="min-h-[100px] relative overflow-visible">
              <div 
                className="transform transition-transform duration-500 ease-in-out absolute left-0"
                style={{ 
                  transform: `translateY(-${totalOffset}px)`,
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {[...Array(totalRotations + 2)].map((_, rotation) => (
                  contentTypes.map((type) => (
                    <div 
                      key={`${type.id}-${rotation}`}
                      className="min-h-[100px] flex items-center text-purple-400 whitespace-nowrap"
                    >
                      {type.title}
                    </div>
                  ))
                ))}
              </div>
            </div>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 animate-fade-in">
            {currentDescription}
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
          >
            Our Services <ArrowRight className="ml-2" />
          </Link>

          {/* Pause/Play Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsPaused(!isPaused)}
            className="absolute bottom-4 right-4 rounded-full border border-purple-400/20 bg-purple-500/10 hover:bg-purple-500/20"
          >
            {isPaused ? 
              <Play className="h-4 w-4 text-purple-400" /> : 
              <Pause className="h-4 w-4 text-purple-400" />
            }
          </Button>
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

      {/* Worked With Section - More Compact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Worked With</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by leading content creators across various niches
          </p>
        </div>

        <div className="relative px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {allVideos.map((video, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pt-8 pb-2">
                  <div className="relative group">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
                      <Avatar className="w-16 h-16 border-2 border-[#1A1F2C] shadow-lg">
                        <AvatarImage src={video.creator.image} alt={video.creator.name} />
                        <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="pt-10 rounded-xl overflow-hidden bg-purple-500/20 border border-purple-500/20 shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-purple-500/30">
                      <div className="text-center px-4 pb-3">
                        <h3 className="text-lg font-semibold text-white mb-0.5">{video.creator.name}</h3>
                        <p className="text-sm text-purple-400">{video.creator.subscribers}</p>
                      </div>
                      
                      <div className="relative aspect-video">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1A1F2C]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-sm font-semibold text-white mb-1">{video.title}</h4>
                            <p className="text-xs text-purple-400">{video.views}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-purple-500 hover:bg-purple-600 text-white border-none transition-colors -left-2">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="bg-purple-500 hover:bg-purple-600 text-white border-none transition-colors -right-2">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
