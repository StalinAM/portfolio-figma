import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import items from "./items";

const HeaderC = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;
const Nav = styled.nav`
  max-width: ${(props) => props.theme.WidthSection};
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
`;
const LogoImg = styled.img`
  width: 2rem;
`;
const List = styled.ul`
  display: flex;
  gap: 2rem;
`;
const Link = styled.a`
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
              <Link href={item.link}>
                <Icon>#</Icon>
                {item.title}
              </Link>
            </li>
          ))}
        </List>
      </Nav>
    </HeaderC>
  );
};

export default Header;
