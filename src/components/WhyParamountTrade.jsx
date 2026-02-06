const WhyParamountTrade = () => {
  return (
    <section className="bg-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="animate-fade-up text-4xl md:text-5xl font-extralight text-white tracking-wide mb-6">
            Why Paramount Trade
          </h2>
          <p className="animate-fade-up delay-200 text-slate-400 max-w-2xl mx-auto">
            A new standard in global sourcing — built for trust, transparency, and excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Card */}
          {[
            {
              title: "Direct Global Sourcing",
              text: "Products are sourced directly from international markets without unnecessary intermediaries."
            },
            {
              title: "Transparent Pricing",
              text: "Clear pricing with no hidden costs, ensuring fairness and confidence in every purchase."
            },
            {
              title: "Secure International Logistics",
              text: "End-to-end logistics with tracking, insurance, and verified delivery partners."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="animate-fade-up group bg-white/5 border border-white/10 rounded-xl p-10 backdrop-blur-md
                         transition-all duration-500 ease-out
                         hover:-translate-y-2 hover:border-[#D4AF37]/40
                         hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.25)]"
            >
              <h3 className="relative text-white text-lg tracking-wider mb-4 inline-block">
                {item.title}
                {/* gold underline */}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default WhyParamountTrade
