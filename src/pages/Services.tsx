import { Code, Paintbrush, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
  },
  {
    icon: <Paintbrush size={32} />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that engage and convert.",
  },
  {
    icon: <Globe size={32} />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-lg border hover:border-primary transition-colors group"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;