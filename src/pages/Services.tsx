
import { Video, Youtube, Film, Edit, Wand2, BarChart, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Updated services array with type field
const services = [
  {
    icon: <Video size={32} className="text-purple-400" />,
    title: "Video Editing",
    description: "Professional editing with smooth transitions, color grading, and sound design.",
    id: "video-editing",
    type: "individual"
  },
  {
    icon: <Youtube size={32} className="text-purple-400" />,
    title: "YouTube Optimization",
    description: "Thumbnail creation, title optimization, and content strategy.",
    id: "youtube-optimization",
    type: "individual"
  },
  {
    icon: <Film size={32} className="text-purple-400" />,
    title: "Motion Graphics",
    description: "Custom animations and visual effects to enhance your content.",
    id: "motion-graphics",
    type: "individual"
  },
  {
    icon: <Edit size={32} className="text-purple-400" />,
    title: "Content Planning",
    description: "Strategic planning and content calendar management.",
    id: "content-planning",
    type: "individual"
  },
  {
    icon: <Wand2 size={32} className="text-purple-400" />,
    title: "Special Effects",
    description: "High-quality VFX and creative transitions for engaging content.",
    id: "special-effects",
    type: "individual"
  },
  {
    icon: <BarChart size={32} className="text-purple-400" />,
    title: "Analytics Review",
    description: "Data-driven insights to improve your channel's performance.",
    id: "analytics-review",
    type: "individual"
  },
  {
    icon: <Package size={32} className="text-purple-400" />,
    title: "Content Creator Starter Bundle",
    description: "Everything you need to kickstart your YouTube channel: Video Editing, YouTube Optimization, and Content Planning.",
    id: "starter-bundle",
    type: "bundle"
  },
  {
    icon: <Package size={32} className="text-purple-400" />,
    title: "Professional Growth Bundle",
    description: "Take your channel to the next level with Analytics Review, Motion Graphics, and Special Effects.",
    id: "growth-bundle",
    type: "bundle"
  },
  {
    icon: <Package size={32} className="text-purple-400" />,
    title: "Ultimate Creator Bundle",
    description: "All our services combined for a comprehensive content creation solution at a discounted rate.",
    id: "ultimate-bundle",
    type: "bundle"
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [showBundles, setShowBundles] = useState(false);
  const [filteredServices, setFilteredServices] = useState(services.filter(service => service.type === "individual"));

  // Update filtered services when toggle changes
  useEffect(() => {
    setFilteredServices(services.filter(service => service.type === (showBundles ? "bundle" : "individual")));
  }, [showBundles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const decorations = document.querySelectorAll('.decoration');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      decorations.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || "0.05");
        const x = (window.innerWidth * mouseX * speed);
        const y = (window.innerHeight * mouseY * speed);
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C] pt-16 relative overflow-hidden">
      {/* Abstract Decorations */}
      <div 
        className="decoration absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl transition-all duration-1000 ease-out" 
        data-speed="0.03" 
      />
      <div 
        className="decoration absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl transition-all duration-1000 ease-out" 
        data-speed="0.05" 
      />
      <div 
        className="decoration absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-pink-500/5 blur-3xl transition-all duration-1000 ease-out" 
        data-speed="0.04" 
      />
      
      {/* Animated Lines */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-purple-500/20 via-purple-500/10 to-transparent" />
      <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-purple-500/20 via-purple-500/10 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-20 w-4 h-4 rounded-full bg-purple-400/20 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-blue-400/20 animate-[pulse_5s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-pink-400/20 animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive video editing and content optimization services to help you grow your YouTube channel.
          </p>
        </div>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Label 
            htmlFor="service-toggle" 
            className={`text-lg font-medium cursor-pointer ${!showBundles ? 'text-purple-400' : 'text-gray-400'}`}
          >
            Individual Services
          </Label>
          <Switch 
            id="service-toggle" 
            checked={showBundles}
            onCheckedChange={setShowBundles}
            className="data-[state=checked]:bg-purple-600"
          />
          <Label 
            htmlFor="service-toggle" 
            className={`text-lg font-medium cursor-pointer ${showBundles ? 'text-purple-400' : 'text-gray-400'}`}
          >
            Service Bundles
          </Label>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group relative p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 ease-out cursor-pointer bg-[#232836]/50 backdrop-blur-sm hover:transform hover:translate-y-[-4px]"
            >
              {/* Holographic layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" style={{ transform: 'translateZ(20px)' }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 rounded-lg" style={{ transform: 'translateZ(40px)' }} />
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 rounded-lg" style={{ transform: 'translateZ(60px)' }} />
              
              {/* Content with different elevation levels */}
              <div className="relative z-10 transform group-hover:translate-y-[-4px] transition-transform duration-700 ease-out">
                <div className="text-purple-400 mb-4 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 ease-out">
                  {service.icon}
                </div>
              </div>
              
              <div className="relative z-20 transform group-hover:translate-y-[-4px] transition-transform duration-500 delay-100 ease-out">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <div className="relative z-30 transform group-hover:translate-y-[-2px] transition-transform duration-500 delay-200 ease-out">
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
