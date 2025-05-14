
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
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }} 
      />

      {/* Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      {/* Gradient Lines */}
      <div className="gradient-line" style={{ left: '10%' }} />
      <div className="gradient-line" style={{ right: '10%' }} />

      <HeroSection 
        currentDescription={currentDescription}
        totalOffset={totalOffset}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        totalRotations={totalRotations}
      />

      <WorkedWithSection />

      <BenefitsSection />

      {/* Bottom Gradient Element */}
      <div className="relative h-36 overflow-hidden bg-[#1A1F2C]">
        <div className="w-full h-full absolute bottom-0 bg-gradient-to-br from-purple-600/30 via-indigo-500/20 to-fuchsia-500/30 blur-2xl transform-gpu opacity-70"></div>
        <div className="w-2/3 h-full absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-t from-purple-800/40 to-transparent rounded-full blur-3xl transform-gpu"></div>
      </div>
    </div>
  );
};

export default Home;
