
import { useEffect, useState } from "react";
import { 
  Star, 
  Clock, 
  Video, 
  Users 
} from "lucide-react";

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  increment: number;
  target: number;
}

const StatsSection = () => {
  const [stats, setStats] = useState<StatItem[]>([
    {
      id: "projects",
      value: 0,
      suffix: "+",
      label: "Projects Completed",
      icon: <Video className="h-6 w-6 text-purple-400" />,
      increment: 10,
      target: 750
    },
    {
      id: "hours",
      value: 0,
      suffix: "k+",
      label: "Hours of Editing",
      icon: <Clock className="h-6 w-6 text-purple-400" />,
      increment: 0.2,
      target: 8
    },
    {
      id: "clients",
      value: 0,
      suffix: "+",
      label: "Creators Served",
      icon: <Users className="h-6 w-6 text-purple-400" />,
      increment: 5,
      target: 150
    },
    {
      id: "rating",
      value: 0,
      suffix: ".9",
      label: "Customer Rating",
      icon: <Star className="h-6 w-6 text-purple-400" />,
      increment: 0.1,
      target: 4
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(currentStats => 
        currentStats.map(stat => {
          if (stat.value < stat.target) {
            return {
              ...stat,
              value: Math.min(stat.value + stat.increment, stat.target)
            };
          }
          return stat;
        })
      );
    }, 100);

    // Clear the interval when all stats reach their targets
    if (stats.every(stat => stat.value >= stat.target)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="py-16 relative overflow-visible bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div 
              key={stat.id}
              className="bg-[#1E2234]/70 backdrop-blur-sm border border-purple-500/10 p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {Math.floor(stat.value)}{stat.suffix}
              </div>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
