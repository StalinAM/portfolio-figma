import React from "react";
import { MainContainer } from "../subComponents/Container";
import { projectsData } from "../data";
import HeaderP from "./allProjects/HeaderP";
import SectionP from "./allProjects/SectionP";

function AllProjects() {
  const smallProjects = projectsData.filter(
    (item) => item.category == "component"
  );
  const completeProjects = projectsData.filter(
    (item) => item.category == "complete"
  );
  return (
    <>
      <HeaderP />
      <MainContainer>
        <SectionP title="complete-apps-webs" listProjects={completeProjects} />
        <SectionP title="components" listProjects={smallProjects} />
      </MainContainer>
    </>
  );
}

export default AllProjects;
