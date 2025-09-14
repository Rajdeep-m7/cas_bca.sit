import { useEffect } from "react";
import About from "../Components/about";
import Contact from "../Components/Contact";
import Events from "../Components/events";

import Home from "../Components/Home";
import { useLocation } from "react-router-dom";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <Home />
      <About />
      <Events />
      <Contact />
    </>
  );
}

export default HomePage;
