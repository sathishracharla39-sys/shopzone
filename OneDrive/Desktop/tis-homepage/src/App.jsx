import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animation/ScrollProgress";
import CustomCursor from "./components/animation/CustomCursor";

import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import Sports from "./components/sections/Sports";
import Achievements from "./components/sections/Achievements";
import Testimonials from "./components/sections/Testimonials";
import VirtualTour from "./components/sections/VirtualTour";
import Admissions from "./components/sections/Admissions";

function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <Campus />
        <Sports />
        <Achievements />
        <Testimonials />
        <VirtualTour />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}

export default App;