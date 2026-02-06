import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] font-bold">
            PT
          </div>
          <span className="text-white tracking-[0.3em] text-sm font-semibold">
            PARAMOUNT
            <span className="text-[#D4AF37]"> TRADE</span>
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-gray-300">
          <Link to="/shop" className="hover:text-[#D4AF37] transition">Shop</Link>
          <Link to="/how-it-works" className="hover:text-[#D4AF37] transition">How It Works</Link>
          <Link to="/track-order" className="hover:text-[#D4AF37] transition">Track</Link>
        </div>

        {/* Login */}
        <Link
          to="/login"
          className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black transition"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
