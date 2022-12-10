import React from "react";
import styled from "styled-components";
const Card = styled.div`
  max-width: 11rem;
  border: 1px solid ${(props) => props.theme.Description};
`;
const Type = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.Subtitle};
  padding: 0.5rem;
`;
const List = styled.p`
  border-top: 1px solid ${(props) => props.theme.Description};
  padding: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`;
function CardSkill({ title }) {
  return (
    <Card>
      <Type>{title}</Type>
      <List>TypeScript Lua Python JavaScript</List>
    </Card>
  );
}

export default CardSkill;
