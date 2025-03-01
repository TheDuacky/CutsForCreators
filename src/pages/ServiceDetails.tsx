import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Check, Package, Mail, MessageSquare, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    deliverables: "Final video in multiple formats (4K, 1080p, Mobile)",
    type: "individual"
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
    deliverables: "Thumbnail, metadata package, strategy document",
    type: "individual"
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
    deliverables: "Source files and rendered animations",
    type: "individual"
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
    deliverables: "Monthly content calendar and strategy document",
    type: "individual"
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
    deliverables: "Rendered effects and composited footage",
    type: "individual"
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
    deliverables: "Comprehensive report and action plan",
    type: "individual"
  },
  "starter-bundle": {
    icon: "Package",
    title: "Content Creator Starter Bundle",
    description: "Everything you need to kickstart your YouTube channel: Video Editing, YouTube Optimization, and Content Planning.",
    features: [
      "Professional video editing (up to 10 minutes)",
      "Custom thumbnail design",
      "SEO-optimized metadata",
      "1-month content calendar",
      "Channel setup guidance",
      "Dedicated support"
    ],
    pricing: "$399/month (20% off individual pricing)",
    turnaround: "5-7 days for complete package",
    deliverables: "Edited videos, thumbnails, metadata, and content calendar",
    type: "bundle",
    includedServices: ["video-editing", "youtube-optimization", "content-planning"]
  },
  "growth-bundle": {
    icon: "Package",
    title: "Professional Growth Bundle",
    description: "Take your channel to the next level with Analytics Review, Motion Graphics, and Special Effects.",
    features: [
      "Monthly analytics review and recommendations",
      "Custom motion graphics (intro, outro, lower thirds)",
      "3 special effects per month",
      "Growth strategy session",
      "Technical optimization",
      "Priority support"
    ],
    pricing: "$549/month (25% off individual pricing)",
    turnaround: "7-10 days for initial setup, then ongoing",
    deliverables: "Analytics report, custom graphics package, special effects",
    type: "bundle",
    includedServices: ["analytics-review", "motion-graphics", "special-effects"]
  },
  "ultimate-bundle": {
    icon: "Package",
    title: "Ultimate Creator Bundle",
    description: "All our services combined for a comprehensive content creation solution at a discounted rate.",
    features: [
      "Professional video editing (unlimited minutes)",
      "Complete YouTube channel optimization",
      "Custom motion graphics and special effects",
      "Comprehensive content planning",
      "Monthly analytics and strategy review",
      "VIP priority support"
    ],
    pricing: "$999/month (30% off individual pricing)",
    turnaround: "Priority processing for all deliverables",
    deliverables: "All-inclusive content creation package with priority service",
    type: "bundle",
    includedServices: ["video-editing", "youtube-optimization", "motion-graphics", "content-planning", "special-effects", "analytics-review"]
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
  ],
  "starter-bundle": [
    {
      title: "Starter Bundle Example",
      image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6",
      description: "Complete channel transformation with the Starter Bundle."
    },
    {
      title: "Beginner Growth Results",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec",
      description: "Channel growth results after 3 months with the Starter Bundle."
    },
  ],
  "growth-bundle": [
    {
      title: "Professional Transformation",
      image: "https://images.unsplash.com/photo-1612299065617-f883adb67bd1",
      description: "Before and after comparison of a channel using the Growth Bundle."
    },
    {
      title: "Advanced Effects Demo",
      image: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3",
      description: "Showcase of special effects and motion graphics included in the Growth Bundle."
    },
  ],
  "ultimate-bundle": [
    {
      title: "Ultimate Creator Success",
      image: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc",
      description: "Case study of a creator who achieved massive growth with the Ultimate Bundle."
    },
    {
      title: "Full Production Quality",
      image: "https://images.unsplash.com/photo-1580130732078-f80ffb84a05c",
      description: "Professional-grade content created with the Ultimate Bundle package."
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

  const isBundle = service.type === "bundle";

  return (
    <div className="min-h-screen bg-[#1A1F2C] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          className="mb-8 text-white hover:text-purple-400"
          onClick={() => navigate("/services")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Button>

        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            {isBundle && (
              <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-4">
                Bundle
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{service.title}</h1>
            <p className="text-xl text-gray-300">{service.description}</p>
          </div>

          {portfolio.length > 0 && (
            <div className="max-w-5xl mx-auto">
              <div className="relative px-8">
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
                        <AspectRatio ratio={16 / 9} className="bg-[#232836] rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full"
                          />
                        </AspectRatio>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-[#232836] border-purple-500/20 lg:col-span-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6 text-white">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {isBundle && service.includedServices && (
                  <div className="mt-8 pt-8 border-t border-purple-500/20">
                    <h3 className="text-xl font-semibold mb-6 text-white">Included Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.includedServices.map((serviceId) => {
                        const includedService = services[serviceId as keyof typeof services];
                        return includedService ? (
                          <div 
                            key={serviceId} 
                            className="p-4 rounded-lg border border-purple-500/20 bg-[#1A1F2C] cursor-pointer hover:border-purple-500/40 transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/services/${serviceId}`);
                            }}
                          >
                            <h4 className="text-white font-medium mb-2">{includedService.title}</h4>
                            <p className="text-gray-400 text-sm">{includedService.description}</p>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-[#232836] border-purple-500/20">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Pricing</h3>
                <p className="text-3xl font-bold text-purple-400 mb-6">{service.pricing}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Get Started
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#232836] border border-purple-500/20 text-white sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white">Let's Connect</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      <div className="space-y-4">
                        <a 
                          href="mailto:contact@example.com" 
                          className="flex items-center p-4 bg-[#1A1F2C] rounded-lg hover:bg-[#2A2F3C] transition-colors"
                        >
                          <Mail className="h-5 w-5 text-purple-400 mr-3" />
                          <div>
                            <h4 className="font-semibold">Email Us</h4>
                            <p className="text-gray-300 text-sm">contact@example.com</p>
                          </div>
                        </a>

                        <a 
                          href="https://discord.gg/example" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center p-4 bg-[#1A1F2C] rounded-lg hover:bg-[#2A2F3C] transition-colors"
                        >
                          <MessageSquare className="h-5 w-5 text-purple-400 mr-3" />
                          <div>
                            <h4 className="font-semibold">Discord</h4>
                            <p className="text-gray-300 text-sm">Join our community</p>
                          </div>
                        </a>

                        <a 
                          href="tel:+1234567890" 
                          className="flex items-center p-4 bg-[#1A1F2C] rounded-lg hover:bg-[#2A2F3C] transition-colors"
                        >
                          <Phone className="h-5 w-5 text-purple-400 mr-3" />
                          <div>
                            <h4 className="font-semibold">Phone</h4>
                            <p className="text-gray-300 text-sm">+1 (234) 567-890</p>
                          </div>
                        </a>

                        <a 
                          href="https://example.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center p-4 bg-[#1A1F2C] rounded-lg hover:bg-[#2A2F3C] transition-colors"
                        >
                          <Globe className="h-5 w-5 text-purple-400 mr-3" />
                          <div>
                            <h4 className="font-semibold">Website</h4>
                            <p className="text-gray-300 text-sm">Visit our website</p>
                          </div>
                        </a>
                      </div>
                      
                      <p className="text-center text-gray-300 text-sm">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
