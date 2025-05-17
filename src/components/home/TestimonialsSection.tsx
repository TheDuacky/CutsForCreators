
import { useState } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Working with this team transformed my channel's professional appearance. The editing quality is outstanding and my audience growth has been significant.",
    author: {
      name: "Alex Morgan",
      role: "Tech Reviewer",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=100",
    }
  },
  {
    id: "2",
    text: "The motion graphics package they created for my gaming channel gave me a unique identity that stands out. Viewers always comment on how professional my videos look now.",
    author: {
      name: "Sarah Chen",
      role: "Gaming Creator",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
    }
  },
  {
    id: "3",
    text: "Their analytics service helped me understand what content resonates with my audience. After implementing their suggestions, my channel growth accelerated dramatically.",
    author: {
      name: "Marcus Johnson",
      role: "Lifestyle Vlogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
    }
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 relative overflow-visible bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from content creators who have transformed their channels with our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`bg-[#1A1F2C]/60 backdrop-blur-sm border border-purple-500/10 p-6 rounded-2xl transition-all duration-300 hover:border-purple-500/30 ${
                index === activeIndex ? "md:scale-105 border-purple-500/30" : ""
              }`}
            >
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-purple-400 mb-4 opacity-70" />
                
                <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
                
                <div className="flex items-center mt-4">
                  <Avatar className="h-10 w-10 mr-3 border border-purple-500/20">
                    <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                    <AvatarFallback className="bg-purple-800/30 text-purple-200">
                      {testimonial.author.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.author.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="hidden md:flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-purple-500" : "bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
