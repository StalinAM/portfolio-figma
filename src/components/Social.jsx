import React from 'react'
import styled from 'styled-components'

function Social() {
  return (
    <Container>
      <Icon
        href='https://www.linkedin.com/in/stalin-acurio-915561248/'
        target='_blank'
        aria-label='Linkedin Link'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M18.47 0H1.53A1.45 1.45 0 0 0 .06 1.43v17.14A1.45 1.45 0 0 0 1.53 20h16.94a1.448 1.448 0 0 0 1.47-1.43V1.43A1.45 1.45 0 0 0 18.47 0ZM6.09 16.74h-3v-9h3v9ZM4.59 6.48a1.56 1.56 0 0 1 0-3.12 1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 10.85 11a1.999 1.999 0 0 0-.1.73v5h-3v-9h3V9a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18Z' />
        </svg>
      </Icon>
      <Icon
        href='https://github.com/StalinAM'
        target='_blank'
        aria-label='Github Link'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M10 .247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.637 3.637 0 0 0-1.025-1.413c-.35-.187-.85-.65-.012-.662a2.001 2.001 0 0 1 1.537 1.025 2.137 2.137 0 0 0 2.913.825c.043-.509.27-.984.637-1.338-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025.37.839.406 1.786.1 2.65A3.869 3.869 0 0 1 16.4 9.722c0 3.837-2.337 4.687-4.562 4.937a2.367 2.367 0 0 1 .675 1.85c0 1.338-.013 2.413-.013 2.75 0 .263.188.575.688.475A10.005 10.005 0 0 0 10 .247Z' />
        </svg>
      </Icon>
      <Line />
    </Container>
  )
}

export default Social

const Container = styled.div`
  position: fixed;
  left: 2.5rem;
  bottom: 0;
  display: grid;
  justify-items: center;
  gap: 1rem;
  z-index: 100;
  @media screen and (max-width: 1080px) {
    left: 1.25rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Line = styled.div`
  left: 0.8rem;
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.Title};
`
const Icon = styled.a`
  svg {
    width: 26px;
  }
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
  transition: transform 0.5s ease 0s;
  &:hover {
    transform: translateY(-0.3rem);
  }
`
