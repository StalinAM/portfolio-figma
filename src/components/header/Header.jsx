import { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { LanguageContext } from '../../context/Language'
import { listMenu } from '../data'

const HeaderC = styled.header`
  padding: 2.5rem 2.5rem 0;
`

const Nav = styled.nav`
  max-width: ${(props) => props.theme.WidthSection};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
const LogoImg = styled.img`
  width: 3rem;
`
const List = styled.ul`
  display: flex;
  gap: 2rem;
  z-index: 101;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.Background};
    flex-direction: column;
    width: min(75vw, 400px);
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`
const Links = styled.a`
  font-size: 1.2rem;
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  span {
    color: ${(props) => props.theme.Title};
  }
`
const Open = styled.i`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: ${(props) => props.theme.Subtitle};
    font-size: 2.5rem;
  }
`
const Close = styled.i`
  cursor: pointer;
  display: none;
  color: ${(props) => props.theme.Subtitle};
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.show ? 'block' : 'none')};
    position: absolute;
    right: 2.5rem;
    top: 2.5rem;
  }
`
const MenuLanguage = styled.select`
  background: ${(props) => props.theme.Background};
  border: none;
  color: ${(props) => props.theme.Title};
  font-size: 1.2rem;
  cursor: pointer;
  appearance: none;
  padding: 0 0.5rem;
  &:focus-visible {
    outline: none;
  }
  option {
    color: ${(props) => props.theme.Description};
  }
`
const ItemL = styled.option`
  color: ${(props) => props.theme.Description};
`
const Header = ({ toggle, setToggle }) => {
  const { handleLanguage } = useContext(LanguageContext)
  return (
    <HeaderC>
      <Nav>
        <LogoImg src={logo} alt='SVAM logo' />
        <List show={toggle}>
          {listMenu.map((item) => (
            <li key={item.id}>
              <Links href={item.link} onChange={() => setToggle(!toggle)}>
                <span>#</span>
                {item.title}
              </Links>
            </li>
          ))}
          <MenuLanguage name='language' onClick={handleLanguage}>
            <ItemL value='es'>ES</ItemL>
            <ItemL value='en'>EN</ItemL>
          </MenuLanguage>
          <Close
            show={toggle}
            className='uil uil-times'
            onClick={() => setToggle(!toggle)}
          />
        </List>
        <Open className='uil uil-bars' onClick={() => setToggle(!toggle)} />
      </Nav>
    </HeaderC>
  )
}

export default Header
