import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import { MainContainer } from "../subComponents/Container";

function Main({ toggle }) {
  return (
    <MainContainer show={toggle}>
      <Home />
      <Projects />
      <Skills />
      {/* <About /> */}
      <Contact />
    </MainContainer>
  );
}

export default Main;
