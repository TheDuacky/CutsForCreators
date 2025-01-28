import { ArrowRight, Youtube, Award, Clock, Sparkles, ChevronLeft, ChevronRight, Pause, Play, Zap, Target, Users } from "lucide-react";
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

const benefits = [
  {
    icon: <Zap className="w-12 h-12 text-purple-400" />,
    title: "Lightning Fast",
    description: "Get your edited content back quickly without sacrificing quality"
  },
  {
    icon: <Target className="w-12 h-12 text-purple-400" />,
    title: "Targeted Growth",
    description: "Optimize your content for your specific audience and niche"
  },
  {
    icon: <Users className="w-12 h-12 text-purple-400" />,
    title: "Community Focus",
    description: "Build and engage with your audience through professional content"
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

      {/* Worked With Section - More Compact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Worked With</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by leading content creators across various niches
          </p>
        </div>

        <div className="relative px-12">
          <Carousel className="w-full">
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
            <CarouselPrevious className="-left-12 bg-purple-500 hover:bg-purple-600 text-white border-none">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="-right-12 bg-purple-500 hover:bg-purple-600 text-white border-none">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>

      {/* New Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Transform your content with our professional editing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="group relative bg-[#1A1F2C]/80 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
