import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Cards from "./components/Cards";
import Services from "./components/Services";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Services />
      <Footer />
    </>
  );
}
