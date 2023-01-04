import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 2rem 9rem;
  @media screen and (max-width: 1080px) {
    padding: 2rem 6rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 3rem;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
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
const ListIcons = styled.ul`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 0.5rem;
  }
`;
const IconC = styled.li`
  color: ${(props) => props.theme.Description};
`;
const Icon = styled.a`
  font-size: 1.6rem;
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
`;
const Copyright = styled.p`
  color: ${(props) => props.theme.Description};
`;
function Footer() {
  return (
    <Container>
      <Content>
        <Logo>SVAM</Logo>
        <ListIcons>
          <IconC>
            <Icon
              href="https://www.linkedin.com/in/stalin-acurio-915561248/"
              aria-label="Linkedin link"
              target="_blank"
            >
              <i className="uil uil-linkedin"></i>
            </Icon>
          </IconC>
          <IconC>
            <Icon
              href="https://github.com/StalinAM"
              aria-label="Github link"
              target="_blank"
            >
              <i className="uil uil-github"></i>
            </Icon>
          </IconC>
        </ListIcons>
        <Copyright>Designed & Built by Stalin</Copyright>
      </Content>
    </Container>
  );
}

export default Footer;
