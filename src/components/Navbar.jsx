import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md">
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide text-blue-900"
      >
        Paramount Trade
      </Link>

      <div className="flex gap-6">
        <Link to="/shop" className="hover:text-blue-600">Shop</Link>
        <Link to="/how-it-works" className="hover:text-blue-600">
          How It Works
        </Link>
        <Link to="/track-order" className="hover:text-blue-600">
          Track Order
        </Link>
      </div>

      <Link
        to="/login"
        className="bg-yellow-500 text-blue-900 px-4 py-2 rounded font-semibold"
      >
        Login
      </Link>
    </nav>
  )
}

export default Navbar
