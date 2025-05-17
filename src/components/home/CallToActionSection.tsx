
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 relative overflow-visible bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Content?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Let our professionals help you create content that stands out and grows your audience
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/services">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 text-lg"
              >
                Explore Our Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
            
            <Link to="/showreel">
              <Button 
                variant="outline"
                className="border-purple-500/40 bg-purple-900/10 text-purple-300 hover:bg-purple-900/20 hover:border-purple-500/70 px-6 py-6 text-lg"
              >
                Watch Our Showreel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
