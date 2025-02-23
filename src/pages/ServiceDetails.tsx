import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Check, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const services = {
  "video-editing": {
    icon: "Video",
    title: "Video Editing",
    description: "Professional editing with smooth transitions, color grading, and sound design.",
    features: [
      "Professional color grading",
      "Custom transitions and effects",
      "Sound design and mixing",
      "Content optimization",
      "Quick turnaround time",
      "Unlimited revisions"
    ],
    pricing: "$50/minute of final video",
    turnaround: "48-72 hours",
    deliverables: "Final video in multiple formats (4K, 1080p, Mobile)"
  },
  "youtube-optimization": {
    icon: "Youtube",
    title: "YouTube Optimization",
    description: "Thumbnail creation, title optimization, and content strategy.",
    features: [
      "Custom thumbnail design",
      "SEO-optimized titles and descriptions",
      "Tags research and optimization",
      "Channel audit and strategy",
      "Analytics review",
      "Competitor analysis"
    ],
    pricing: "$150/video package",
    turnaround: "24-48 hours",
    deliverables: "Thumbnail, metadata package, strategy document"
  },
  "motion-graphics": {
    icon: "Film",
    title: "Motion Graphics",
    description: "Custom animations and visual effects to enhance your content.",
    features: [
      "Custom animated intros/outros",
      "Lower thirds and text animations",
      "Logo animations",
      "Visual effects",
      "3D elements integration",
      "Brand consistency"
    ],
    pricing: "$200/project",
    turnaround: "3-5 days",
    deliverables: "Source files and rendered animations"
  },
  "content-planning": {
    icon: "Edit",
    title: "Content Planning",
    description: "Strategic planning and content calendar management.",
    features: [
      "Content calendar creation",
      "Topic research and validation",
      "Audience analysis",
      "Trend forecasting",
      "Collaboration planning",
      "Growth strategy"
    ],
    pricing: "$300/month",
    turnaround: "Initial plan within 5 days",
    deliverables: "Monthly content calendar and strategy document"
  },
  "special-effects": {
    icon: "Wand2",
    title: "Special Effects",
    description: "High-quality VFX and creative transitions for engaging content.",
    features: [
      "Custom visual effects",
      "Green screen compositing",
      "Particle effects",
      "3D tracking",
      "Scene enhancement",
      "Reality manipulation"
    ],
    pricing: "$100/effect",
    turnaround: "3-7 days",
    deliverables: "Rendered effects and composited footage"
  },
  "analytics-review": {
    icon: "BarChart",
    title: "Analytics Review",
    description: "Data-driven insights to improve your channel's performance.",
    features: [
      "Performance analysis",
      "Audience insights",
      "Growth opportunities",
      "Competitor benchmarking",
      "Content optimization suggestions",
      "ROI tracking"
    ],
    pricing: "$250/review",
    turnaround: "5 days",
    deliverables: "Comprehensive report and action plan"
  }
};

const portfolioItems = {
  "video-editing": [
    {
      title: "Travel Vlog Edit",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "Dynamic travel footage with smooth transitions and color grading that brings the destination to life."
    },
    {
      title: "Product Review",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "Professional product showcase with cinematic shots and detailed close-ups."
    },
    {
      title: "Tech Tutorial",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Clear, engaging step-by-step tutorial with motion graphics and screen recordings."
    },
  ],
  "youtube-optimization": [
    {
      title: "Channel Growth Strategy",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Strategic channel optimization"
    },
    {
      title: "Thumbnail Design",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Eye-catching thumbnail creation"
    },
  ],
  "motion-graphics": [
    {
      title: "Animated Intro",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Engaging animated intro"
    },
    {
      title: "Logo Animation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Brand consistent logo animation"
    },
  ],
  "content-planning": [
    {
      title: "Content Calendar",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Detailed content calendar"
    },
    {
      title: "Audience Analysis",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Audience insights for content strategy"
    },
  ],
  "special-effects": [
    {
      title: "VFX Effect",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "High-quality visual effects"
    },
    {
      title: "Particle Animation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Particle effects for scene enhancement"
    },
  ],
  "analytics-review": [
    {
      title: "Analytics Report",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Comprehensive analytics report"
    },
    {
      title: "Content Optimization",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "Optimized content suggestions"
    },
  ]
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services[id as keyof typeof services];
  const portfolio = portfolioItems[id as keyof typeof portfolioItems] || [];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#1A1F2C] pt-16 px-4">
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h1 className="text-3xl text-white mb-4">Service not found</h1>
          <Button onClick={() => navigate("/services")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button
          variant="ghost"
          className="mb-8 text-white hover:text-purple-400"
          onClick={() => navigate("/services")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6 text-white">{service.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>

            {portfolio.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-white">Featured Work</h2>
                <div className="relative">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {portfolio.map((item, index) => (
                        <CarouselItem key={index}>
                          <Card className="bg-[#232836] border-purple-500/20">
                            <CardContent className="p-0">
                              <AspectRatio ratio={16 / 9}>
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="object-cover w-full h-full rounded-t-lg"
                                />
                              </AspectRatio>
                              <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                      <CarouselPrevious className="h-12 w-12" />
                    </div>
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                      <CarouselNext className="h-12 w-12" />
                    </div>
                  </Carousel>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-[#232836] border-purple-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-purple-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">Turnaround Time</h3>
                  </div>
                  <p className="text-gray-300">{service.turnaround}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#232836] border-purple-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Package className="h-5 w-5 text-purple-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">Deliverables</h3>
                  </div>
                  <p className="text-gray-300">{service.deliverables}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[#232836] border-purple-500/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-[#232836] border-purple-500/20 sticky top-24">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Pricing</h3>
                <p className="text-3xl font-bold text-purple-400 mb-6">{service.pricing}</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
