
export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="https://www.citypeopleonline.com/wp-content/uploads/2022/11/How-STEPHEN-AKINTAYO-Hit-It-BIG-In-Real-Estate-1.jpg"
                alt="Dr Stephen Akintayo"
                className="relative w-full h-auto rounded-2xl shadow-2xl border-2 border-white/20"
              />
            </div>
          </div>

          {/* Content on the right */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-amber-400">Dr Stephen Akintayo</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mb-8"></div>
            </div>

            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Dr Stephen Akintayo</strong> is a globally recognized real estate investment expert, 
                author, and speaker who has transformed the lives of thousands through strategic property investments 
                across multiple continents.
              </p>
              
              <p>
                With over two decades of experience navigating the complex waters of international real estate markets, 
                Dr Akintayo has personally invested in properties across the United States, United Kingdom, Dubai, 
                and Nigeria, building a portfolio worth millions.
              </p>

              <p>
                He is the bestselling author of multiple real estate investment books and has been featured in 
                major publications worldwide. His unique approach combines deep market analysis with practical, 
                actionable strategies that work for both beginners and seasoned investors.
              </p>

              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 mt-8">
                <p className="text-amber-300 font-medium text-xl italic">
                  "Real estate investment is not about luck—it's about knowledge, timing, and execution."
                </p>
                <cite className="text-white/70 text-sm block mt-2">– Dr Stephen Akintayo</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
