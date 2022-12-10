import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import FormContact from "./FormContact";
const Container = styled.section`
  padding: 6rem 0 2rem;
`;
const Content = styled.div`
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto 0;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
`;
const Text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`;
const BoxMessage = styled.form``;
function Contact() {
  return (
    <Container>
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
