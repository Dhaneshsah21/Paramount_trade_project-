const FinalCTA = () => {
  return (
    <section className="relative bg-[#020617] py-40 overflow-hidden">

      {/* Soft cinematic glow */}
      <div className="absolute top-1/2 left-1/4 w-[520px] h-[520px] bg-[#D4AF37]/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] bg-blue-900/20 rounded-full blur-[180px]" />

      <div className="relative max-w-4xl mx-auto px-8 text-center">

        {/* Heading */}
        <h2 className="animate-fade-up text-4xl md:text-5xl font-extralight text-white tracking-wide mb-8">
          Experience Global Trade <br />
          <span className="text-[#D4AF37] font-normal">
            Without Complexity
          </span>
        </h2>

        {/* Description */}
        <p className="animate-fade-up delay-200 text-slate-400 text-lg leading-relaxed mb-14">
          Paramount Trade connects you to premium international products —
          sourced responsibly, shipped securely, and delivered seamlessly.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">

          <button className="bg-[#D4AF37] text-black px-14 py-4 text-sm tracking-[0.25em] uppercase font-medium
                             hover:opacity-90 transition">
            Enter Marketplace
          </button>

          <button className="border border-white/30 text-white px-14 py-4 text-sm tracking-[0.25em] uppercase
                             hover:border-[#D4AF37] hover:text-[#D4AF37] transition">
            Contact Us
          </button>

        </div>
      </div>
    </section>
  )
}

export default FinalCTA
