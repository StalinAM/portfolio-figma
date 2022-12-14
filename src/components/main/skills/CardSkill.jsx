import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.Description};
  padding: 1rem;
`;
const Type = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.Subtitle};
  padding: 0.5rem;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 1rem 4rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
  @media screen and (max-width: 480px) {
    gap: 1rem 2rem;
  }
`;
const Item = styled.li`
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`;
const Icon = styled.i`
  color: ${(props) => props.theme.Title};
`;
function CardSkill({ title, listSkills }) {
  return (
    <Card>
      <Type>{title}</Type>
      <List>
        {listSkills.map((item) => (
          <Item key={item.id}>
            <Icon className="uil uil-label"></Icon>
            {item.name}
          </Item>
        ))}
      </List>
    </Card>
  );
}

export default CardSkill;
