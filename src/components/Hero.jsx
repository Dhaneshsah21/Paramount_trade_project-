const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] text-center">

      {/* Video-style animated background (dark blue) */}
      <div className="absolute inset-0 bg-[#020617] animate-bgSlow" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0F172A] to-[#020617] opacity-80" />

      {/* Cinematic light glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[160px] animate-orbOne" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-900/25 rounded-full blur-[180px] animate-orbTwo" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020617]/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="animate-fade-up text-5xl md:text-7xl font-extralight text-white tracking-wide leading-tight mb-8">
          The World’s Market <br />
          <span className="text-[#D4AF37] font-normal">
            Without Borders
          </span>
        </h1>

        <p className="animate-fade-up delay-200 text-slate-300 text-lg md:text-xl mb-14">
          Paramount Trade brings global premium products directly
          to you — transparently, securely, and effortlessly.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">
          
          <button className="bg-[#D4AF37] text-[#020617] px-12 py-4 text-sm tracking-[0.25em] uppercase hover:opacity-90 transition">
            Enter Marketplace
          </button>

          <button className="border border-white/25 text-white px-12 py-4 text-sm tracking-[0.25em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition">
            How It Works
          </button>

        </div>
      </div>
    </section>
  )
}

export default Hero
