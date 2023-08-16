import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Video from "./components/Video";
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence initial={true} mode="sync">
        <Routes key={location.pathname} Location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/vportfolio" element={<Video />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
