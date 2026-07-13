import Banner from "../components/home/Banner"
import CTA from "../components/home/CTA"
import Features from "../components/home/Features"
import Footer from "../components/home/Footer"
import Hero from "../components/home/Hero"
import Testimonial from "../components/home/Testimonial"

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
      <Footer/>
    </div>
  )
}

export default Home