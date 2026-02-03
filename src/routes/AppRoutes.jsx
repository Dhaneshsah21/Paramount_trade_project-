import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import HowItWorks from "../pages/HowItWorks"
import TrackOrder from "../pages/TrackOrder"
import Login from "../pages/Login"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
