import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">

          {/* Brand */}
          <div>
            <h3 className="text-white text-xl tracking-wide mb-4">
              Paramount <span className="text-[#D4AF37]">Trade</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              A premium global sourcing platform connecting customers
              to trusted international markets with transparency and care.
            </p>

            {/* Founder */}
            <p className="text-slate-500 text-xs tracking-wider">
              Founded by <span className="text-white">Dhanesh</span>
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">

            <div>
              <h4 className="text-white tracking-wider mb-4">Explore</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link to="/" className="hover:text-[#D4AF37]">Home</Link></li>
                <li><Link to="/shop" className="hover:text-[#D4AF37]">Shop</Link></li>
                <li><Link to="/how-it-works" className="hover:text-[#D4AF37]">How It Works</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white tracking-wider mb-4">Support</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link to="/track-order" className="hover:text-[#D4AF37]">Track Order</Link></li>
                <li><Link to="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-[#D4AF37]">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link to="/privacy" className="hover:text-[#D4AF37]">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[#D4AF37]">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs tracking-wider">

          <p>© {new Date().getFullYear()} Paramount Trade. All rights reserved.</p>

          <p className="mt-4 md:mt-0">
            Global sourcing, refined.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
