import React from "react";
import styled from "styled-components";
import DataPerson from "./DataPerson";
import Social from "./Social";
import imageHome from "../../../assets/home.png";

const Container = styled.section`
  padding: 6rem 0 2rem;
  position: relative;
`;
const Content = styled.article`
  max-width: ${(props) => props.theme.WidthSection};
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
`;
const ImageHome = styled.img`
  width: 100%;
`;
function Home() {
  return (
    <Container id="home">
      <Social />
      <Content>
        <DataPerson />
        <ImageHome src={imageHome}/>
      </Content>
    </Container>
  );
}

export default Home;
