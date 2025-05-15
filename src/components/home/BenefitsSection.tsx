
import { Target, Users, Star } from "lucide-react";

const benefits = [
  {
    icon: <div className="flex flex-col items-center w-full">
            <div className="flex gap-1 mb-2">
              <Star className="w-5 h-5 text-green-500 fill-green-500" />
              <Star className="w-5 h-5 text-green-500 fill-green-500" />
              <Star className="w-5 h-5 text-green-500 fill-green-500" />
              <Star className="w-5 h-5 text-green-500 fill-green-500" />
              <Star className="w-5 h-5 text-green-500 fill-green-500" />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden border border-purple-500/20 bg-black/20 backdrop-blur-sm">
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.trustpilot.com/review/www.trustpilot.com" 
                  title="Trustpilot reviews" 
                  className="w-full h-full transform scale-[0.8] origin-top"
                  style={{ 
                    height: "125%", 
                    pointerEvents: "none" 
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center items-center">
                <a 
                  href="https://www.trustpilot.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white-trustpilot.svg" 
                    alt="Trustpilot" 
                    className="h-6" 
                  />
                </a>
              </div>
            </div>
            <div className="text-xs text-gray-300 mt-2">
              5.0 rating - <span className="font-semibold">Excellent</span>
            </div>
          </div>,
    title: "Trusted by Customers",
    description: "Check out our reviews from verified customers on Trustpilot"
  },
  {
    icon: <Target className="w-12 h-12 text-purple-400" />,
    title: "Targeted Growth",
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
