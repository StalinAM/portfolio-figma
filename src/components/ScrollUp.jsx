import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const Scroll = styled.a`
  position: fixed;
  right: 2.5rem;
  bottom: ${(props) => (props.show ? '4rem' : '-20%')};
  opacity: 0.8;
  padding: 0.3rem 0.5rem;
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
    padding: 0.25rem 0.4rem;
  }
  @media screen and (max-width: 480px) {
    right: 1rem;
  }
`
const Icon = styled.i`
  font-size: 1.5rem;
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
      <Icon className='uil uil-arrow-up' />
    </Scroll>
  )
}

export default ScrollUp
