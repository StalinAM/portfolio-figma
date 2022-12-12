import React from "react";
import styled from "styled-components";
import { Container } from "../subComponents/Container";

const Title = styled.h2`
  font-size: 2rem;
  max-width: 65rem;
  margin: 0 auto;
  color: ${(props) => props.theme.Subtitle};
`;
const TitleSpan = styled.span`
  color: ${(props) => props.theme.Title};
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;
function SectionP({ title }) {
  return (
    <Container>
      <Title>
        <TitleSpan>#</TitleSpan>
        {title}
      </Title>
      <List></List>
    </Container>
  );
}

export default SectionP;
