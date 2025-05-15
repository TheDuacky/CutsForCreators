
import { Target, Users, Star } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  {
    icon: <div className="flex items-center justify-center">
            <div className="w-full" id="trustbox" style={{ minHeight: "120px" }} />
          </div>,
    title: "Trusted by Customers",
    description: "See our reviews from verified customers on Trustpilot"
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
  useEffect(() => {
    // Load Trustpilot TrustBox script
    const trustboxRef = document.getElementById('trustbox');
    if (trustboxRef && !document.getElementById('trustpilot-script')) {
      const script = document.createElement('script');
      script.id = 'trustpilot-script';
      script.type = 'text/javascript';
      script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      script.async = true;
      
      script.onload = () => {
        // Initialize TrustBox once script is loaded
        if (window.Trustpilot) {
          window.Trustpilot.loadFromElement(trustboxRef, {
            businessUnitId: "YOUR_BUSINESS_UNIT_ID", // Replace with your Trustpilot business ID
            templateId: "5419b6ffb0d04a076446a9af", // MicroStar template - shows mini stars and rating
            theme: "dark",
          });
        }
      };
      
      document.head.appendChild(script);
    }
    
    return () => {
      // Cleanup script on unmount
      const scriptElement = document.getElementById('trustpilot-script');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

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
