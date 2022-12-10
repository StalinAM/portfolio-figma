import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function Main() {
  return (
    <main>
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}

export default Main;
