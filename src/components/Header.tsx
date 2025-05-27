
import { Building2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Property Masters" className="w-20 h-10" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#details" className="text-white/80 hover:text-amber-400 transition-colors">Details</a>
          <a href="#benefits" className="text-white/80 hover:text-amber-400 transition-colors">Benefits</a>
          <a href="#register" className="text-white/80 hover:text-amber-400 transition-colors">Register</a>
        </nav>
        <a 
          href="#register" 
          className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Register Free
        </a>
      </div>
    </header>
  );
};
