import React from "react";
import styled from "styled-components";
import DataPerson from "./DataPerson";
import imageHome from "../../../assets/home.png";
import { Container } from "../../subComponents/Container";
const Content = styled.article`
  max-width: ${(props) => props.theme.WidthSection};
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const ImageHome = styled.img`
  width: 100%;
`;
function Home() {
  return (
    <Container id="home">
      <Content>
        <DataPerson />
        <ImageHome src={imageHome} alt="illustration of Stalin who is in front of a laptop where he programs"/>
      </Content>
    </Container>
  );
}

export default Home;
