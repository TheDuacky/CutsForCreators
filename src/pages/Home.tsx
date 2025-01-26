import { ArrowRight, Youtube, Award, Clock, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const clients = [
  {
    name: "Gaming Legends",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    subscribers: "2.5M+",
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
        title: "Epic Gaming Moments 2024",
        views: "1.2M views"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        title: "Gaming Setup Tour",
        views: "800K views"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
        title: "Best Gaming Moments",
        views: "950K views"
      }
    ]
  },
  {
    name: "Tech Reviews Daily",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    subscribers: "1M+",
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        title: "Latest Tech Review 2024",
        views: "500K views"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        title: "Tech News Roundup",
        views: "300K views"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        title: "Gadget Comparison",
        views: "400K views"
      }
    ]
  },
  {
    name: "Creative Tutorials",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    subscribers: "800K+",
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279",
        title: "Creative Masterclass",
        views: "300K views"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
        title: "Tutorial Series",
        views: "250K views"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
        title: "Behind the Scenes",
        views: "200K views"
      }
    ]
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
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
        
        <div className="grid grid-cols-1 gap-16">
          {clients.map((client) => (
            <div 
              key={client.name}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg bg-black/20">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={client.image} alt={client.name} />
                  <AvatarFallback>{client.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-2">{client.name}</h3>
                  <p className="text-purple-400 text-lg">{client.subscribers} Subscribers</p>
                </div>
              </div>

              <div className="relative px-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {client.videos.map((video, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full aspect-video object-cover rounded-lg transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="text-center p-4">
                              <h4 className="text-white font-semibold mb-2">{video.title}</h4>
                              <p className="text-gray-300">{video.views}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
