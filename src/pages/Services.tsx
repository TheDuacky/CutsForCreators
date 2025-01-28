import { Video, Youtube, Film, Edit, Wand2, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const services = [
  {
    icon: <Video size={32} className="text-purple-400" />,
    title: "Video Editing",
    description: "Professional editing with smooth transitions, color grading, and sound design.",
    id: "video-editing"
  },
  {
    icon: <Youtube size={32} className="text-purple-400" />,
    title: "YouTube Optimization",
    description: "Thumbnail creation, title optimization, and content strategy.",
    id: "youtube-optimization"
  },
  {
    icon: <Film size={32} className="text-purple-400" />,
    title: "Motion Graphics",
    description: "Custom animations and visual effects to enhance your content.",
    id: "motion-graphics"
  },
  {
    icon: <Edit size={32} className="text-purple-400" />,
    title: "Content Planning",
    description: "Strategic planning and content calendar management.",
    id: "content-planning"
  },
  {
    icon: <Wand2 size={32} className="text-purple-400" />,
    title: "Special Effects",
    description: "High-quality VFX and creative transitions for engaging content.",
    id: "special-effects"
  },
  {
    icon: <BarChart size={32} className="text-purple-400" />,
    title: "Analytics Review",
    description: "Data-driven insights to improve your channel's performance.",
    id: "analytics-review"
  }
];

const Services = () => {
  const navigate = useNavigate();

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
      {/* Abstract Decorations with smoother animations */}
      <div 
        className="decoration absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl transition-transform duration-1000 ease-out" 
        data-speed="0.03" 
      />
      <div 
        className="decoration absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl transition-transform duration-1000 ease-out" 
        data-speed="0.05" 
      />
      <div 
        className="decoration absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-pink-500/5 blur-3xl transition-transform duration-1000 ease-out" 
        data-speed="0.04" 
      />
      
      {/* Animated Lines with smoother gradients */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-purple-500/20 via-purple-500/10 to-transparent transition-all duration-1000" />
      <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-purple-500/20 via-purple-500/10 to-transparent transition-all duration-1000" />
      
      {/* Floating Elements with smoother animations */}
      <div className="absolute top-40 left-20 w-4 h-4 rounded-full bg-purple-400/20 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-blue-400/20 animate-[pulse_5s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-pink-400/20 animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive video editing and content optimization services to help you grow your YouTube channel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 ease-out group cursor-pointer bg-[#232836]/50 backdrop-blur-sm opacity-0 animate-[fade-in_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;