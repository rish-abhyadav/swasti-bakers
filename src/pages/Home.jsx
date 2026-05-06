import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import CustomCake from "../components/CustomCake";
import VR from "../components/VR";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Cart from "../components/Cart";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <CustomCake />
      <VR />
      <Gallery />
      <Reviews />
      <Contact />
      <Cart />
    
    </>
  );
}

export default Home;