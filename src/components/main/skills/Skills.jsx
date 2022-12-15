import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import CardSkill from "./CardSkill";
import { Container } from "../../subComponents/Container";
import { frontend, backend } from "../../data";
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto 0;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
function Skills() {
  return (
    <Container id="skills">
      <Title title="skills" />
      <Content>
        <CardSkill title="Frontend" listSkills={frontend} />
        <CardSkill title="Others" listSkills={backend} />
      </Content>
    </Container>
  );
}

export default Skills;
