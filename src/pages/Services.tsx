
import { Video, Youtube, Film, Edit, Wand2, BarChart, Package, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";

// Services array with type field
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    // Filter services based on search query and filter type
    const filtered = services.filter(service => {
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = 
        filterType === "all" || 
        service.type === filterType;
      
      return matchesSearch && matchesType;
    });
    
    setFilteredServices(filtered);
  }, [searchQuery, filterType]);

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
      {/* Site-wide background gradient - darkened */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#151923] to-[#1E222D] z-0" />
      
      {/* Radial overlay with reduced opacity */}
      <div className="absolute inset-0 w-full h-[200vh] bg-radial-gradient z-0" />

      {/* Gradient Orbs with reduced opacity */}
      <div className="gradient-orb gradient-orb-1" style={{ height: '800px', width: '800px', opacity: '0.12' }} />
      <div className="gradient-orb gradient-orb-2" style={{ height: '700px', width: '700px', opacity: '0.08' }} />
      <div className="gradient-orb gradient-orb-3" style={{ height: '600px', width: '600px', opacity: '0.1' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive video editing and content optimization services to help you grow your YouTube channel.
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-center">
          <div className="relative w-full md:w-2/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search services..."
              className="pl-10 bg-[#232836]/80 border-purple-500/30 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-1/3">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="bg-[#232836]/80 border-purple-500/30 text-white">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter services" />
              </SelectTrigger>
              <SelectContent className="bg-[#232836] border-purple-500/30 text-white">
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="individual">Individual Services</SelectItem>
                <SelectItem value="bundle">Service Bundles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group relative p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 ease-out cursor-pointer bg-[#232836]/50 backdrop-blur-sm hover:transform hover:translate-y-[-4px]"
              >
                {/* Bundle Indicator */}
                {service.type === "bundle" && (
                  <Badge className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 px-3 py-1 text-xs font-semibold animate-pulse">
                    Bundle
                  </Badge>
                )}
                
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
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
              <p className="text-gray-300 text-lg">No services found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setFilterType("all");
                }}
                className="mt-4 px-6 py-2 bg-purple-500/50 hover:bg-purple-500/70 text-white rounded-md transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
