
import { Eye, Users, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <div className="flex flex-col items-center w-full">
            <a 
              href="https://www.trustpilot.com/review/cutsforcreators.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button 
                variant="outline" 
                className="w-full bg-[#00b67a] hover:bg-[#00a06d] text-white border-none group flex justify-center gap-2 py-5"
              >
                {/* Replace the external image with styled text for reliability */}
                <div className="font-bold text-white">Trustpilot</div>
                <span>View our reviews</span>
                <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>
          </div>,
    title: "Trusted by Customers",
    description: "Check out our reviews from verified customers on Trustpilot"
  },
  {
    icon: <Eye className="w-12 h-12 text-purple-400" />,
    title: "We watch what we make",
    description: "Optimize your content for your specific audience and niche"
  },
  {
    icon: <Users className="w-12 h-12 text-purple-400" />,
    title: "Community Focus",
    description: "Build and engage with your audience through professional content"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 relative overflow-visible bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your content with our professional editing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group relative bg-[#1A1F2C]/50 border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                {index === 0 ? (
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                ) : (
                  <div className="mb-4 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
