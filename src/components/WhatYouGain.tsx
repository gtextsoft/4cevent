
import { Target, Banknote, Scale, Users } from "lucide-react";

export const WhatYouGain = () => {
  const gains = [
    {
      icon: Target,
      title: "Market Timing Matrix",
      description: "Know when to buy, not just what."
    },
    {
      icon: Banknote,
      title: "Financing Fork-lift",
      description: "Creative funding moves that keep your cashflow agile."
    },
    {
      icon: Scale,
      title: "Tax & Legal Compass",
      description: "Avoid the hidden landmines that devour novice investors."
    },
    {
      icon: Users,
      title: "Global Contacts Rolodex",
      description: "Because who you know still beats what you know."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What You'll <span className="text-green-400">Walk Away With</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gains.map((gain, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:border-green-400/50 transition-all duration-300">
              <div className="bg-green-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <gain.icon className="text-green-400" size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{gain.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{gain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
