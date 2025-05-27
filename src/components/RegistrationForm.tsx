import { Button } from "@/components/ui/button";

export const RegistrationForm = () => {
  return (
    <section id="register" className="py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎯 <span className="text-amber-400">Registration</span>
          </h2>
          <p className="text-xl text-white/70 italic">
            Short, sharp, straight-to-the-point. Hit the button. See you inside.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border-white/20 rounded-xl p-12 flex flex-col items-center">
          <Button
            asChild
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-lg px-12 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
          >
            <a
              href="https://us06web.zoom.us/webinar/register/WN_qqXKojwAQ2yoKUWn4hrQbA#/registration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </Button>
          <p className="text-white/60 text-sm mt-4 italic">
            Because the next property boom won't pause for procrastinators.
          </p>
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">How it works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-amber-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-400 font-bold text-lg">1</span>
              </div>
              <p className="text-white/80 text-sm">Click the button ➡ get an instant confirmation email.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-400 font-bold text-lg">2</span>
              </div>
              <p className="text-white/80 text-sm">Event link arrives 24 hours before go-time—guard it like it's your private key.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold text-lg">3</span>
              </div>
              <p className="text-white/80 text-sm">Show up on camera, pen ready, mind open.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
