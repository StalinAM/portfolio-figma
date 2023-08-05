import { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../context/Language'

const Header = ({ toggle, setToggle, toggleTheme, theme }) => {
  const { handleLanguage, texts } = useContext(LanguageContext)
  return (
    <HeaderC>
      <Nav>
        <svg
          id='Capa_1'
          data-name='Capa 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 29.06 29.06'
        >
          <path
            className='cls-1'
            d='M29.52,14.31v0H20.9l-.4-.69-.42-.72L16.12,6H13.88l-4,6.87-.42.72-.4.69H2.81q0-.35.06-.69c0-.24.06-.48.11-.72a12.21,12.21,0,0,1,9.24-9.75h0c.32-.07.65-.13,1-.18s.54-.07.81-.09l.25,0,.72,0,.72,0,.25,0c.27,0,.54,0,.8.09s.66.11,1,.18h0A12.21,12.21,0,0,1,27,12.86h2.35A14.49,14.49,0,0,0,26.4,6,15,15,0,0,0,23.34,3.1,14.55,14.55,0,0,0,19,1c-.33-.09-.65-.17-1-.24S17.33.65,17,.6s-.68-.08-1-.1-.64,0-1,0-.65,0-1,0-.69.06-1,.1-.69.11-1,.18S11.33.93,11,1A14.55,14.55,0,0,0,6.66,3.1,15,15,0,0,0,3.6,6a14.49,14.49,0,0,0-3,6.87q-.06.36-.09.72c0,.23,0,.46-.05.69v0c0,.23,0,.46,0,.69s0,.47,0,.7v0H8.26l-.41.7-.42.73-1.9,3.3H7.77l1.9-3.3.42-.73.41-.7v0l.41-.7.4-.69,0,0,.39-.69.42-.72L14,9.6l1-1.67h0l1,1.68,1.87,3.25.42.72.4.69,0,0,.4.69.41.7v0l.41.7.42.73,1.9,3.3h2.24l-1.91-3.3-.42-.73-.4-.7h5.45c0,.23,0,.47-.06.7s-.07.49-.11.73a12.1,12.1,0,0,1-1.1,3.3,13.17,13.17,0,0,1-.72,1.26c-.2.29-.41.58-.63.85a9.85,9.85,0,0,1-.67.78h0A12.16,12.16,0,0,1,16,27.17v-10H14v10A12.16,12.16,0,0,1,6.1,23.35a9.85,9.85,0,0,1-.67-.78C5.21,22.3,5,22,4.8,21.71a11.91,11.91,0,0,1-.72-1.25A12.1,12.1,0,0,1,3,17.16H.63a14.63,14.63,0,0,0,.9,3.3,15,15,0,0,0,1.58,2.89l.42.57c.21.27.43.53.66.79s.46.49.7.72A14.45,14.45,0,0,0,14,29.5c.32,0,.64,0,1,0s.65,0,1,0a14.48,14.48,0,0,0,9.14-4.07q.36-.34.69-.72c.23-.26.46-.52.67-.79l.42-.57a15,15,0,0,0,1.58-2.89,14.63,14.63,0,0,0,.9-3.3c0-.24.07-.49.09-.73s0-.47.05-.7v0c0-.23,0-.46,0-.7S29.53,14.54,29.52,14.31Z'
            transform='translate(-0.47 -0.47)'
          />
          <path
            className='cls-1'
            d='M14,16.19a1.76,1.76,0,0,0,.42.24,1.56,1.56,0,0,0,1.1,0,1.76,1.76,0,0,0,.42-.24,1.87,1.87,0,0,0,.38-.46s0,0,0,0a1.51,1.51,0,0,0,.17-.7,1.59,1.59,0,0,0-.16-.69s0,0,0,0a1.87,1.87,0,0,0-.38-.46,1.9,1.9,0,0,0-.39-.23,1.58,1.58,0,0,0-1.16,0,1.9,1.9,0,0,0-.39.23,1.87,1.87,0,0,0-.38.46s0,0,0,0a1.59,1.59,0,0,0-.16.69,1.51,1.51,0,0,0,.17.7v0A1.87,1.87,0,0,0,14,16.19Z'
            transform='translate(-0.47 -0.47)'
          />
        </svg>
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
            aria-label='Close menu'
            show={toggle}
            onClick={() => setToggle(!toggle)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 14 14'
            >
              <path d='m8.41 7 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L7 5.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42L5.59 7l-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L7 8.41l4.29 4.3a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L8.41 7Z' />
            </svg>
          </Close>
          <Theme onClick={toggleTheme}>
            {theme === 'dark' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='m3.64 15-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 3.64 15ZM3 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM3.64 5.05a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41l.71.71Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29h-.02ZM19 9h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 15 16.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.76-.66ZM10 4.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 10 4.5Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 21 20'
              >
                <path d='M19.64 11a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 6 .36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 5.08 3.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.784 9.784 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32v-.04Z' />
              </svg>
            )}
          </Theme>
        </List>
        <Open aria-label='open menu' onClick={() => setToggle(!toggle)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 12'
          >
            <path
              fill='#000'
              d='M1 2h18a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2Zm18 8H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H1a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2Z'
            />
          </svg>
        </Open>
      </Nav>
    </HeaderC>
  )
}

export default Header

const HeaderC = styled.header`
  padding: 2.5rem 2.5rem 0;
`

const Nav = styled.nav`
  max-width: ${(props) => props.theme.WidthSection};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  svg {
    width: 3rem;
    height: 3rem;
    path {
      fill: ${(props) => props.theme.Title};
    }
  }
`
const List = styled.ul`
  display: flex;
  align-items: center;
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
  color: ${(props) => props.theme.Subtitle};
  position: relative;
  &:hover {
    color: ${(props) => props.theme.Title};
  }
  &::before {
    font-weight: 400;
    position: absolute;
    color: ${(props) => props.theme.Title};
    opacity: 0;
    left: -14px;
    content: '<';
    transition: opacity 0.3s ease;
  }
  &::after {
    font-weight: 400;
    position: absolute;
    color: ${(props) => props.theme.Title};
    opacity: 0;
    right: -23px;
    content: '/>';
    transition: opacity 0.3s ease;
  }
  &:hover::before,
  &:hover::after {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    &::before {
      left: -20px;
    }
    &::after {
      right: -30px;
    }
  }
`
const Open = styled.button`
  cursor: pointer;
  display: none;
  background: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    svg {
      color: ${(props) => props.theme.Subtitle};
      width: 40px;
    }
  }
`
const Close = styled.button`
  cursor: pointer;
  display: none;
  svg {
    color: ${(props) => props.theme.Subtitle};
    width: 30px;
  }
  background: none;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    align-items: center;
    position: absolute;
    right: 2.5rem;
    top: 2.5rem;
  }
`
const Theme = styled.button`
  color: ${(props) => props.theme.Title};
  background: none;
  display: flex;
  align-items: center;
  svg {
    width: 26px;
  }
  @media screen and (max-width: 768px) {
    svg {
      width: 30px;
    }
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
