import { Film, Youtube, Edit } from "lucide-react";

const projects = [
  {
    title: "Gaming Channel Revamp",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "YouTube Channel Editing",
    description: "Complete channel redesign and video editing for a gaming creator with 500K+ subscribers",
    icon: <Youtube className="w-6 h-6" />
  },
  {
    title: "Cinematic Travel Series",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Video Production",
    description: "Professional travel content editing with color grading and motion graphics",
    icon: <Film className="w-6 h-6" />
  },
  {
    title: "Tech Review Channel",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Content Strategy",
    description: "Weekly video editing and thumbnail creation for a tech review channel",
    icon: <Edit className="w-6 h-6" />
  },
  {
    title: "Educational Content",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "YouTube Optimization",
    description: "Full-service editing for an educational channel, including animations and graphics",
    icon: <Youtube className="w-6 h-6" />
  },
];

const Showreel = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Work</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transforming creator content through professional editing, stunning visuals, and strategic optimization
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg aspect-video bg-black/20 border border-purple-500/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="flex justify-center mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-purple-300 mb-2">{project.category}</p>
                  <p className="text-sm text-gray-300 max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showreel;