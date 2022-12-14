import React from "react";
import { MainContainer } from "../subComponents/Container";
import { projectsData } from "../data";
import HeaderP from "./allProjects/HeaderP";
import SectionP from "./allProjects/SectionP";

function AllProjects() {
  const smallProjects = projectsData.filter((item) => item.category == "small");
  const completeProjects = projectsData.filter(
    (item) => item.category == "complete"
  );
  return (
    <>
      <HeaderP />
      <MainContainer>
        <SectionP title="complete-apps" listProjects={completeProjects} />
        <SectionP title="small-projects" listProjects={smallProjects} />
      </MainContainer>
    </>
  );
}

export default AllProjects;
