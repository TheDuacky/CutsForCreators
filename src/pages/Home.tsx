import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient min-h-[80vh] flex items-center justify-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating Digital
            <br />
            Experiences
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            We bring your ideas to life through innovative design and cutting-edge technology.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Our Services <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;