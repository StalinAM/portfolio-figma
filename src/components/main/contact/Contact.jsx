import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import FormContact from "./FormContact";
import { Container } from "../../subComponents/Container";
const Content = styled.div`
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto 0;
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
const Text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`;

function Contact() {
  return (
    <Container id="contact">
      <Title title="contact" />
      <Content>
        <Text>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </Text>
        <FormContact />
      </Content>
    </Container>
  );
}

export default Contact;
