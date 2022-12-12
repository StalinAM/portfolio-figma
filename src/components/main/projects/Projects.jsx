import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import WorkCard from "./WorkCard";
import { Link } from "react-router-dom";
import { Container } from "../../subComponents/Container";
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto;
  gap: 2rem;
`;
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
  return (
    <Container id="projects">
      <Title title="projects" />
      <Content>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </Content>
      <ViewAll to="/all-projects">
        View all<Arrow className="uil uil-arrow-right"></Arrow>
      </ViewAll>
    </Container>
  );
}

export default Projects;
