const Stats = () => {
  return (
    <section className="bg-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section heading */}
        <div className="text-center mb-24">
          <h2 className="animate-fade-up text-4xl md:text-5xl font-extralight text-white tracking-wide mb-6">
            Trusted Worldwide
          </h2>
          <p className="animate-fade-up delay-200 text-slate-400 max-w-xl mx-auto">
            Built on reliability, transparency, and global reach.
          </p>
        </div>

        {/* Stats */}
        <div className="relative">

          {/* Journey Line */}
          <div className="hidden md:block absolute top-[42px] left-0 right-0 h-px bg-[#D4AF37]/40"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-24">

            {/* STAT 1 */}
            <div className="animate-fade-up text-center relative">
              <div className="relative z-10 mx-auto mb-10 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] text-sm tracking-widest">
                🌍
              </div>
              <h3 className="text-4xl font-light text-white mb-3">
                50+
              </h3>
              <p className="text-slate-400 tracking-wide">
                Countries Connected
              </p>
            </div>

            {/* STAT 2 */}
            <div className="animate-fade-up delay-200 text-center relative">
              <div className="relative z-10 mx-auto mb-10 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] text-sm tracking-widest">
                📦
              </div>
              <h3 className="text-4xl font-light text-white mb-3">
                10K+
              </h3>
              <p className="text-slate-400 tracking-wide">
                Products Sourced
              </p>
            </div>

            {/* STAT 3 */}
            <div className="animate-fade-up delay-300 text-center relative">
              <div className="relative z-10 mx-auto mb-10 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] text-sm tracking-widest">
                🚚
              </div>
              <h3 className="text-4xl font-light text-white mb-3">
                99.9%
              </h3>
              <p className="text-slate-400 tracking-wide">
                Delivery Accuracy
              </p>
            </div>

            {/* STAT 4 */}
            <div className="animate-fade-up delay-300 text-center relative">
              <div className="relative z-10 mx-auto mb-10 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] text-sm tracking-widest">
                🔒
              </div>
              <h3 className="text-4xl font-light text-white mb-3">
                100%
              </h3>
              <p className="text-slate-400 tracking-wide">
                Secure Payments
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
