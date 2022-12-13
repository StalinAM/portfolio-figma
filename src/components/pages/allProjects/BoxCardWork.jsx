import React from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";

const Content = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto;
  gap: 2rem;
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
function BoxCardWork({ listProjects }) {
  return (
    <Content>
      {listProjects.map((item) => (
        <WorkCard
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          web={item.web}
          tools={item.tools}
          github={item.github}
        />
      ))}
    </Content>
  );
}

export default BoxCardWork;
