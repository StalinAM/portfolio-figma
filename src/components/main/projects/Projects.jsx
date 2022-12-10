import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import WorkCard from "./WorkCard";
const Container = styled.section`
  padding: 6rem 0 2rem;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto 0;
  gap: 2rem;
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
    </Container>
  );
}

export default Projects;
