import { Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contentTypes } from "@/data/content-types";
interface HeroSectionProps {
  currentDescription: string;
  totalOffset: number;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
  totalRotations: number;
}
const HeroSection = ({
  currentDescription,
  totalOffset,
  isPaused,
  setIsPaused,
  totalRotations
}: HeroSectionProps) => {
  return <div className="hero-gradient min-h-[80vh] flex items-center justify-center text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Level Up Your
          <br />
          <div className="h-[100px] relative overflow-hidden px-[240px]">
            <div className="transform transition-transform duration-500 ease-in-out absolute left-0" style={{
            transform: `translateY(-${totalOffset}px)`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
              {[...Array(totalRotations + 2)].map((_, rotation) => contentTypes.map(type => <div key={`${type.id}-${rotation}`} className="h-[100px] flex items-center text-purple-400 whitespace-nowrap">
                    {type.title}
                  </div>))}
            </div>
          </div>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 animate-fade-in">
          {currentDescription}
        </p>
        <Link to="/services" className="inline-flex items-center px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">
          Our Services <ArrowRight className="ml-2" />
        </Link>

        <Button variant="outline" size="icon" onClick={() => setIsPaused(!isPaused)} className="absolute bottom-4 right-4 rounded-full border border-purple-400/20 bg-purple-500/10 hover:bg-purple-500/20">
          {isPaused ? <Play className="h-4 w-4 text-purple-400" /> : <Pause className="h-4 w-4 text-purple-400" />}
        </Button>
      </div>
    </div>;
};
export default HeroSection;