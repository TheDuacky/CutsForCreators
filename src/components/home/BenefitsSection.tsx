
import { Target, Users, Star } from "lucide-react";

const benefits = [
  {
    icon: <div className="flex gap-1">
            <Star className="w-5 h-5 text-green-500 fill-green-500" />
            <Star className="w-5 h-5 text-green-500 fill-green-500" />
            <Star className="w-5 h-5 text-green-500 fill-green-500" />
            <Star className="w-5 h-5 text-green-500 fill-green-500" />
            <Star className="w-5 h-5 text-green-500 fill-green-500" />
          </div>,
    title: "Trusted by Customers",
    description: "5.0 average rating from over 100+ reviews on Trustpilot"
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
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      {benefit.icon}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="inline-block bg-green-500/10 px-2 py-1 rounded text-xs text-green-500">
                        Trustpilot
                      </div>
                      <div className="text-xs text-green-500">
                        Verified Review
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 italic mb-2">
                      "We've been using this editing service for all our marketing content. The turnaround time is impressive and the quality is consistently excellent!"
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        - Michael T., Content Manager
                      </div>
                      <div className="text-xs text-gray-500">
                        Posted 2 weeks ago
                      </div>
                    </div>
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
