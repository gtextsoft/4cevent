
import { Calendar, Clock, DollarSign } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10 blur-3xl"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6">
          <span className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-500/30">
            Free Masterclass • Limited Seats
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            ABC
          </span>{" "}
          of Real Estate{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Investment
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
          Cracking the codes of the{" "}
          <span className="text-amber-400 font-semibold">US, UK, Dubai & Nigeria</span>{" "}
          property markets — in one turbo-charged session
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Calendar className="text-amber-400 mb-3 mx-auto" size={32} />
            <h3 className="text-white font-semibold mb-2">Date</h3>
            <p className="text-white/80">Sunday, 1 June 2025</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <Clock className="text-blue-400 mb-3 mx-auto" size={32} />
            <h3 className="text-white font-semibold mb-2">Multiple Timezones</h3>
            <p className="text-white/80">2 PM CST | 8 PM UK | 11 PM UAE</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <DollarSign className="text-green-400 mb-3 mx-auto" size={32} />
            <h3 className="text-white font-semibold mb-2">Investment</h3>
            <p className="text-white/80">Zero dollars. Zero dirhams. Zero naira.</p>
          </div>
        </div>

        <div className="space-y-4">
          <a 
            href="#register" 
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
          >
            Secure Your Free Seat Now
          </a>
          <p className="text-white/60 text-sm">
            <em>Knowledge is priceless; your seat is free.</em>
          </p>
        </div>
      </div>
    </section>
  );
};
