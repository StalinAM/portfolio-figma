import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const Scroll = styled.a`
  position: fixed;
  right: 2.5rem;
  bottom: ${(props) => (props.show ? '4rem' : '-20%')};
  opacity: 0.8;
  padding: 0.5rem;
  border-radius: 0.4rem;
  z-index: 10;
  border: 1px solid ${(props) => props.theme.Title};
  background-color: ${(props) => props.theme.Background};
  transition: 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
  @media screen and (max-width: 1080px) {
    right: 1.5rem;
    padding: 0.4rem;
  }
  @media screen and (max-width: 480px) {
    right: 1rem;
  }
`
const Icon = styled.svg`
  width: 20px;
  color: ${(props) => props.theme.Subtitle};
  @media screen and (max-width: 62rem) {
    font-size: 1.25rem;
  }
`
function ScrollUp() {
  const [show, setShow] = useState(false)
  //   the scroll is displayed when passing 50 vw
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setShow(true) : setShow(false)
    })
  }, [])

  return (
    <Scroll href='#' aria-label='Return to home' show={show}>
      <Icon
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 14 12'
      >
        <path d='m12.71 5.29-5-5a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-5 5a1.004 1.004 0 1 0 1.42 1.42L6 3.41V11a1 1 0 1 0 2 0V3.41l3.29 3.3a1 1 0 0 0 1.42 0 .998.998 0 0 0 0-1.42Z' />
      </Icon>
    </Scroll>
  )
}

export default ScrollUp
