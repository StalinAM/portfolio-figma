import React from "react";
import { Link } from "react-router-dom";
import { MainContainer } from "../subComponents/Container";
import SectionP from "./SectionP";

function AllProjects() {
  return (
    <>
      <header>
        <Link to="/">Back</Link>
      </header>
      <MainContainer>
        <SectionP title="complete-apps" />
        <SectionP title="all-projects" />
      </MainContainer>
    </>
  );
}

export default AllProjects;
