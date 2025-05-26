
import { Building2, Mail, Phone, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-amber-400" size={32} />
              <span className="text-white font-bold text-xl">Property Masters</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Join thousands of investors learning the insider secrets of international real estate investment 
              from industry expert Dr Stephen Akintayo.
            </p>
            <div className="flex gap-4">
              <a href="mailto:stphenakintayo@gmail.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Mail className="text-white" size={20} />
              </a>
              <a href="tel:+2348060000000" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Phone className="text-white" size={20} />
              </a>
              <a href="https://gtextholdings.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                <Globe className="text-white" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#details" className="text-white/70 hover:text-amber-400 transition-colors">Event Details</a></li>
              <li><a href="#benefits" className="text-white/70 hover:text-amber-400 transition-colors">Why Attend</a></li>
              <li><a href="#register" className="text-white/70 hover:text-amber-400 transition-colors">Register</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Markets Covered</h3>
            <ul className="space-y-2">
              <li className="text-white/70">🇺🇸 United States</li>
              <li className="text-white/70">🇬🇧 United Kingdom</li>
              <li className="text-white/70">🇦🇪 Dubai, UAE</li>
              <li className="text-white/70">🇳🇬 Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Property Masters. All rights reserved. • Event hosted by Dr Stephen Akintayo
          </p>
        </div>
      </div>
    </footer>
  );
};
