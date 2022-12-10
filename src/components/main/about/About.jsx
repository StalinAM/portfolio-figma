import React from "react";
import styled from "styled-components";
import Title from "../../subComponents/Title";
import imageHome from "../../../assets/about.png";
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
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;
const Btn = styled.a`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme.Subtitle};
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
`;
const ImageHome = styled.img`
  width: 70%;
`;
function About() {
  return (
    <Container id="about">
      <Title title="about-me" />
      <Content>
        <Left>
          <Text>Hello, i’m Elias!</Text>
          <Text>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </Text>
          <Text>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </Text>
          <Btn>
            Read more<i className="uil uil-arrow-right"></i>
          </Btn>
        </Left>
        <ImageHome src={imageHome} />
      </Content>
    </Container>
  );
}

export default About;
