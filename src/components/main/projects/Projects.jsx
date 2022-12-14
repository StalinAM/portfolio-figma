import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import { Link } from "react-router-dom";
import { Container } from "../../subComponents/Container";
import BoxCardWork from "../../pages/allProjects/BoxCardWork";
import { projectsData } from "../../data";

const Arrow = styled.i``;
const ViewAll = styled(Link)`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  margin-top: 4rem;
  border: 1px solid ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.Subtitle};
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
  &:hover ${Arrow} {
    transform: translate(0.3rem);
  }
`;
function Projects() {
  const listProjects = projectsData
    .filter((item) => item.category == "complete")
    .slice(0, 6);
  return (
    <Container id="projects">
      <Title title="projects" />
      <BoxCardWork listProjects={listProjects} />
      <ViewAll to="/all-projects">
        View all<Arrow className="uil uil-arrow-right"></Arrow>
      </ViewAll>
    </Container>
  );
}

export default Projects;
