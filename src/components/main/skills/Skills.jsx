import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import CardSkill from "./CardSkill";
import { Container } from "../../subComponents/Container";
const Content = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto 0;
  gap: 2rem;
`;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
`;
function Skills() {
  return (
    <Container id="skills">
      <Title title="skills" />
      <Content>
        <div></div>
        <Right>
          <CardSkill title="Lenguages" />
          <CardSkill title="Databases" />
          <CardSkill title="Tools" />
          <CardSkill title="Others" />
          <CardSkill title="Framworks" />
        </Right>
      </Content>
    </Container>
  );
}

export default Skills;
