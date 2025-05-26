
export const EventDetails = () => {
  const timeZones = [
    { region: "Central (US)", time: "2 PM CST" },
    { region: "United Kingdom / West Africa", time: "8 PM" },
    { region: "Qatar", time: "10 PM" },
    { region: "UAE", time: "11 PM" },
  ];

  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event <span className="text-amber-400">Details</span>
          </h2>
          <p className="text-xl text-white/70 italic">
            Sync the clocks, grab your notebook, mute Netflix.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              🗓️ Schedule
            </h3>
            <div className="space-y-4">
              {timeZones.map((tz, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-white/80">{tz.region}</span>
                  <span className="text-amber-400 font-semibold">{tz.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              💵 Investment Required
            </h3>
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-4">
                $0
              </div>
              <p className="text-white/80 text-lg mb-4">
                Zero dollars. Zero dirhams. Zero naira.
              </p>
              <p className="text-amber-300 font-medium">
                Just hit "Register" before the digital crowd swarms in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
