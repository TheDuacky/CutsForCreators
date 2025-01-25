const projects = [
  {
    title: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Web Development",
  },
  {
    title: "Mobile App Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "UI/UX Design",
  },
  {
    title: "Corporate Website",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Web Development",
  },
  {
    title: "Marketing Campaign",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "Digital Marketing",
  },
];

const Showreel = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
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