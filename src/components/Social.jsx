import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  left: 2.5rem;
  bottom: 0;
  display: grid;
  grid-template-columns: max-content;
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
  position: relative;
  left: 0.8rem;
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.Title};
`
const Icon = styled.a`
  font-size: 1.8rem;
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
  transition: transform 0.5s ease 0s;
  &:hover {
    transform: translateY(-0.3rem);
  }
`

function Social() {
  return (
    <Container>
      <Icon
        href='https://www.linkedin.com/in/stalin-acurio-915561248/'
        target='_blank'
        aria-label='Linkedin Link'
      >
        <i className='uil uil-linkedin'></i>
      </Icon>
      <Icon
        href='https://github.com/StalinAM'
        target='_blank'
        aria-label='Github Link'
      >
        <i className='uil uil-github'></i>
      </Icon>
      <Line />
    </Container>
  )
}

export default Social
