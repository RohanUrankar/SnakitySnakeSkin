import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  // If we're on the home page, show Hero and Gallery together
  if (location.pathname === '/') {
    return (
      <div className="min-h-screen bg-black">
        <NavBar />
        <main>
          <Hero />
          <Gallery />
        </main>
      </div>
    );
  }

  // For other routes, show components individually
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/work" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;