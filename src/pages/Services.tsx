import { Video, Youtube, Film, Edit, Wand2, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="min-h-screen pt-16 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive video editing and content optimization services to help you grow your YouTube channel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors group cursor-pointer"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;