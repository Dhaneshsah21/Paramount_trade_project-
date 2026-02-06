const HowItWorksSection = () => {
  return (
    <section className="bg-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-28">
          <h2 className="animate-fade-up text-4xl md:text-5xl font-extralight text-white tracking-wide mb-6">
            How It Works
          </h2>
          <p className="animate-fade-up delay-200 text-slate-400 max-w-xl mx-auto">
            A seamless journey from global markets to your doorstep.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">

          {/* STEP 1 */}
          <div className="animate-fade-up text-center px-6">
            <div className="mx-auto mb-12 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] tracking-widest">
              01
            </div>
            <h3 className="text-white text-lg tracking-wider mb-4">
              Discover Products
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Explore premium products curated from trusted global markets.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="animate-fade-up delay-200 text-center px-6">
            <div className="mx-auto mb-12 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] tracking-widest">
              02
            </div>
            <h3 className="text-white text-lg tracking-wider mb-4">
              We Source Abroad
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We procure directly from international sellers and partners.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="animate-fade-up delay-300 text-center px-6">
            <div className="mx-auto mb-12 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] tracking-widest">
              03
            </div>
            <h3 className="text-white text-lg tracking-wider mb-4">
              Secure Shipping
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Products are shipped internationally with full tracking.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="animate-fade-up delay-300 text-center px-6">
            <div className="mx-auto mb-12 w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#020617] text-[#D4AF37] tracking-widest">
              04
            </div>
            <h3 className="text-white text-lg tracking-wider mb-4">
              Delivered to You
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Receive your order at your doorstep with complete transparency.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
