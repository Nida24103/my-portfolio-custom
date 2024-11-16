"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Skills from "@/components/";
import Contact from "@/components/contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <Projects />
      {/* <Skills /> */}
      <Contact />
      <About />
    </main>
  );
}
