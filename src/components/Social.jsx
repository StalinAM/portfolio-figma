import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 2.5rem;
  bottom: 0;
  display: grid;
  grid-template-columns: max-content;
  gap: 1rem;
  z-index: 100;
`;
const Line = styled.div`
  position: relative;
  left: 0.8rem;
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.Description};
`;
const Icon = styled.a`
  font-size: 1.6rem;
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
`;

function Social() {
  return (
    <Container>
      <Icon
        href="https://www.linkedin.com/in/stalin-acurio-915561248/"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </Icon>
      <Icon href="https://github.com/StalinAM" target="_blank">
        <i className="uil uil-github"></i>
      </Icon>
      <Line />
    </Container>
  );
}

export default Social;
