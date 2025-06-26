import { Link } from "react-router-dom";
import { Copy, Youtube } from "lucide-react";
import { SiDiscord, SiReddit } from '@icons-pack/react-simple-icons';
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyDiscordUsername = () => {
    navigator.clipboard.writeText("duacky#1234");
    toast.success("Discord username copied to clipboard!");
  };
  return <footer className="bg-[#1A1F2C] border-t border-purple-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white inline-block mb-4">
              <span className="text-purple-400">Cuts</span> for Creators
            </Link>
            <p className="text-gray-300 mb-4">
              Professional video editing and content optimization services for YouTube creators.
            </p>
            <div className="flex space-x-4">
              <a href="https://youtube.com/@cutsfor.creators" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://reddit.com/r/cutsforcreators" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                <SiReddit size={20} />
              </a>
              <button onClick={copyDiscordUsername} className="text-gray-300 hover:text-purple-400 transition-colors">
                <SiDiscord size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/showreel" className="text-gray-300 hover:text-purple-400 transition-colors">Showreel</Link>
              </li>
              <li>
                <Link to="/bio" className="text-gray-300 hover:text-purple-400 transition-colors">Bio</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/video-editing" className="text-gray-300 hover:text-purple-400 transition-colors">Video Editing</Link>
              </li>
              <li>
                <Link to="/services/youtube-optimization" className="text-gray-300 hover:text-purple-400 transition-colors">YouTube Optimization</Link>
              </li>
              <li>
                <Link to="/services/motion-graphics" className="text-gray-300 hover:text-purple-400 transition-colors">Motion Graphics</Link>
              </li>
              <li>
                <Link to="/services/content-planning" className="text-gray-300 hover:text-purple-400 transition-colors">Content Planning</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Youtube className="w-5 h-5 text-purple-400 mr-2" />
                <a href="https://youtube.com/@cutsfor.creators" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                  YouTube Channel
                </a>
              </li>
              <li className="flex items-center">
                <SiDiscord className="w-5 h-5 text-purple-400 mr-2" />
                <button onClick={copyDiscordUsername} className="text-gray-300 hover:text-purple-400 transition-colors">Discord: Duacky</button>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-purple-500/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Cuts for Creators. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;