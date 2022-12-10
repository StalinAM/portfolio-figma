import React from "react";
import styled from "styled-components";
import data from "./data";

const Container = styled.div`
  position: absolute;
  left: 1rem;
  top: 0;
  display: grid;
  grid-template-columns: max-content;
  gap: 1rem;
`;
const Line = styled.div`
  position: relative;
  left: 0.8rem;
  width: 2px;
  height: 12rem;
  background-color: ${(props) => props.theme.Description};
`;
const Icon = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.Description};
`;
function Social() {
  return (
    <Container>
      <Line />
      {data.map((item) => (
        <Icon key={item.id} href={item.link} target="_blank">
          <i className={`uil uil-${item.icon}`}></i>
        </Icon>
      ))}
    </Container>
  );
}

export default Social;
