
import { TrendingUp, Shield, Globe, MessageCircle } from "lucide-react";

export const WhyAttend = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Macro view, micro hacks",
      description: "Big-picture trends boiled down to actionable steps you can take Monday morning."
    },
    {
      icon: Shield,
      title: "Risk radar",
      description: "Learn where bubbles lurk and bargains hide."
    },
    {
      icon: Globe,
      title: "Cross-border playbook",
      description: "Navigate currency swings, legal mazes, and cultural curveballs without losing sleep (or equity)."
    },
    {
      icon: MessageCircle,
      title: "Live Q-and-A",
      description: "Nothing scripted, everything candid."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why You Should <span className="text-blue-400">Care</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Real estate isn't Monopoly money anymore; it's the chessboard of global wealth. 
            From Wall Street brownstones to Canary Wharf penthouses, from Marina towers in Dubai 
            to Lekki smart estates—every square foot tells a story.
          </p>
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 max-w-3xl mx-auto">
            <p className="text-white/90 text-lg">
              <strong className="text-blue-400">Dr Stephen Akintayo</strong> has walked those streets, 
              signed those deeds, and dodged those potholes so you don't have to.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:transform hover:scale-105">
              <benefit.icon className="text-amber-400 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl text-white/90 font-medium italic max-w-3xl mx-auto">
            "If you're waiting for the 'perfect time,' you've already missed the boat."
          </blockquote>
          <cite className="text-amber-400 font-semibold text-lg mt-4 block">– DSA</cite>
        </div>
      </div>
    </section>
  );
};
