import { useContext } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { LanguageContext } from '../../context/Language'

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
  gap: 2.3rem;
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
  font-size: 1.1rem;
  color: ${(props) => props.theme.Description};
  position: relative;
  &:hover {
    color: ${(props) => props.theme.Title};
  }
  &::before {
    font-weight: 400;
    position: absolute;
    color: #ffd200;
    opacity: 0;
    left: -15px;
    content: '<';
    transition: opacity 0.3s ease;
  }
  &::after {
    font-weight: 400;
    position: absolute;
    color: #ffd200;
    opacity: 0;
    right: -21px;
    content: '/>';
    transition: opacity 0.3s ease;
  }
  &:hover::before,
  &:hover::after {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
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
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
  option {
    color: ${(props) => props.theme.Description};
  }
`
const Header = ({ toggle, setToggle }) => {
  const { handleLanguage, texts } = useContext(LanguageContext)
  return (
    <HeaderC>
      <Nav>
        <LogoImg src={logo} alt='SVAM logo' />
        <List show={toggle}>
          {texts.header.listMenu.map((item) => (
            <li key={item.id}>
              <Links href={item.link} onChange={() => setToggle(!toggle)}>
                <span>{item.title}</span>
              </Links>
            </li>
          ))}
          <MenuLanguage name='language' onClick={handleLanguage}>
            <option value='es'>ES</option>
            <option value='en'>EN</option>
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
