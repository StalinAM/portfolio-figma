import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 2rem 9rem;
`;
const Content = styled.div`
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.Title};
  gap: 1rem;
`;
const Logo = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;
  color: ${(props) => props.theme.Subtitle};
`;
const Copyright = styled.p`
  color: ${(props) => props.theme.Description};
`;
function Footer() {
  return (
    <Container>
      <Content>
        <Logo>SVAM</Logo>
        <Copyright>© SVAM. All rigths reserved</Copyright>
      </Content>
    </Container>
  );
}

export default Footer;
