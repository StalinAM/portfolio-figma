import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import items from "./items";

const HeaderC = styled.header`
  padding: 0 2.5rem;
`;

const Nav = styled.nav`
  max-width: ${(props) => props.theme.WidthSection};
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
`;
const LogoImg = styled.img`
  width: 3rem;
`;
const List = styled.ul`
  display: flex;
  gap: 2rem;
`;
const Links = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
`;
const Icon = styled.span`
  color: ${(props) => props.theme.Title};
`;
export const Header = (props) => {
  return (
    <HeaderC>
      <Nav>
        <LogoImg src={logo} />
        <List>
          {items.map((item) => (
            <li key={item.id}>
              <Links href={item.link}>
                <Icon>#</Icon>
                {item.title}
              </Links>
            </li>
          ))}
        </List>
      </Nav>
    </HeaderC>
  );
};

export default Header;
