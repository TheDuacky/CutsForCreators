
import { useEffect, useState } from "react";
import { contentTypes, CAROUSEL_INTERVAL } from "@/data/content-types";
import { type CarouselApi } from "@/components/ui/carousel";
import HeroSection from "@/components/home/HeroSection";
import WorkedWithSection from "@/components/home/WorkedWithSection";
import BenefitsSection from "@/components/home/BenefitsSection";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [totalRotations, setTotalRotations] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress((currentProgress / totalScroll) * 100);

      // Parallax effect for gradient orbs
      const orbs = document.querySelectorAll('.gradient-orb');
      orbs.forEach((orb) => {
        const speed = 0.15;
        const yPos = -(window.scrollY * speed);
        (orb as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentContentIndex((prev) => {
        const nextIndex = (prev + 1) % contentTypes.length;
        if (nextIndex === 0) {
          setTotalRotations(r => r + 1);
        }
        return nextIndex;
      });
    }, CAROUSEL_INTERVAL / 2);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Get the current content for description
  const currentDescription = contentTypes[currentContentIndex].description;

  // Calculate the total offset based on current index and total rotations
  const totalOffset = (totalRotations * contentTypes.length + currentContentIndex) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#1A1F2C] to-[#1A1F2C] relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }} 
      />
      
      {/* Site-wide background gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] z-0" />
      
      {/* Extended radial overlay that spans the entire page */}
      <div className="absolute inset-0 w-full h-[200vh] bg-radial-gradient z-0" />

      {/* Enlarged Gradient Orbs with extended reach */}
      <div className="gradient-orb gradient-orb-1" style={{ height: '800px', width: '800px' }} />
      <div className="gradient-orb gradient-orb-2" style={{ height: '700px', width: '700px' }} />
      <div className="gradient-orb gradient-orb-3" style={{ height: '600px', width: '600px' }} />

      {/* Gradient Lines with increased length */}
      <div className="gradient-line" style={{ left: '10%', height: '1200px' }} />
      <div className="gradient-line" style={{ right: '10%', height: '1200px' }} />

      <HeroSection 
        currentDescription={currentDescription}
        totalOffset={totalOffset}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        totalRotations={totalRotations}
      />

      <WorkedWithSection />

      <BenefitsSection />
    </div>
  );
};

export default Home;
