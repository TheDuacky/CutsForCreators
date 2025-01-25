import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Video, Home, Briefcase } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/services", label: "Services", icon: <Briefcase size={18} /> },
    { href: "/showreel", label: "Showreel", icon: <Video size={18} /> },
  ];

  return (
    <nav className="fixed w-full bg-[#1A1F2C]/95 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-purple-400">Cuts</span> for Creators
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  location.pathname === link.href
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                } transition-colors duration-200 flex items-center gap-2`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1A1F2C] border-b border-purple-500/20">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  location.pathname === link.href
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                } flex items-center gap-2 px-3 py-2 text-base`}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;