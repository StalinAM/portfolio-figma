import React from "react";
import styled from "styled-components";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import { MainContainer } from "../subComponents/Container";

function Main() {
  return (
    <MainContainer>
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </MainContainer>
  );
}

export default Main;
