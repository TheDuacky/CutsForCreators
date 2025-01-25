import { ArrowRight, Youtube, Award, Clock, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
    subscribers: "2.5M+"
  },
  {
    name: "Tech Reviews Daily",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    subscribers: "1M+"
  },
  {
    name: "Creative Tutorials",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    subscribers: "800K+"
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

      {/* New Worked With Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-purple-500/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Worked With</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by leading content creators across various niches
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div 
              key={client.name}
              className="group relative overflow-hidden rounded-lg bg-black/20 p-6 transition-all hover:bg-black/40"
            >
              <img 
                src={client.image} 
                alt={client.name}
                className="w-full h-48 object-cover rounded-lg mb-4 opacity-75 group-hover:opacity-100 transition-opacity"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{client.name}</h3>
              <p className="text-purple-400">{client.subscribers} Subscribers</p>
              <Users className="absolute top-4 right-4 w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;