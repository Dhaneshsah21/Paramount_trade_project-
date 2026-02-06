import Hero from "../components/Hero"
import Stats from "../components/Stats"
import HowItWorksSection from "../components/HowItWorksSection"
import FeaturedProducts from "../components/FeaturedProducts"
import WhyParamountTrade from "../components/WhyParamountTrade"
import FinalCTA from "../components/FinalCTA"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorksSection />
      <FeaturedProducts />
      <WhyParamountTrade/>
      <FinalCTA/>
      <Footer/>
    </>
  )
}

export default Home
