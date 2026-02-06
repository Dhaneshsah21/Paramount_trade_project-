import swissImg from "../assets/images/swiss.jpg"
import italyImg from "../assets/images/italy.jpeg"
import japanImg from "../assets/images/japan.jpg"

const FeaturedProducts = () => {
  return (
    <section className="bg-[#020617] py-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="animate-fade-up text-4xl md:text-5xl font-extralight text-white tracking-wide mb-6">
            Featured Global Products
          </h2>
          <p className="animate-fade-up delay-200 text-slate-400 max-w-xl mx-auto">
            Handpicked premium products sourced directly from international markets.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Swiss Product */}
          <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md hover:border-[#D4AF37]/40 transition">
            <div className="relative h-64 overflow-hidden">
              <img
                src={swissImg}
                alt="Swiss Luxury Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-white tracking-wide mb-2">
                Swiss Luxury Collection
              </h3>
              <p className="text-slate-400 text-sm">
                Precision-crafted products from Switzerland
              </p>
            </div>
          </div>

          {/* Italian Product */}
          <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md hover:border-[#D4AF37]/40 transition">
            <div className="relative h-64 overflow-hidden">
              <img
                src={italyImg}
                alt="Italian Craft Series"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-white tracking-wide mb-2">
                Italian Craft Series
              </h3>
              <p className="text-slate-400 text-sm">
                Handcrafted excellence from Italy
              </p>
            </div>
          </div>

          {/* Japanese Product */}
          <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md hover:border-[#D4AF37]/40 transition">
            <div className="relative h-64 overflow-hidden">
              <img
                src={japanImg}
                alt="Japanese Innovation Series"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-white tracking-wide mb-2">
                Japanese Innovation Series
              </h3>
              <p className="text-slate-400 text-sm">
                Curated from leading Japanese technology brands
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
