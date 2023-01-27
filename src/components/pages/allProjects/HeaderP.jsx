import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 9rem 0;
  @media screen and (max-width: 1080px) {
    padding: 5rem 6rem 0;
  }
  @media screen and (max-width: 768px) {
    padding: 5rem 3rem 0;
  }
  @media screen and (max-width: 480px) {
    padding: 5rem 1.5rem 0;
    flex-direction: column-reverse;
    gap: 3rem;
    align-items: flex-start;
  }
`
const Title = styled.h1`
  color: ${(props) => props.theme.Subtitle};
`
const TitleSpan = styled.span`
  color: ${(props) => props.theme.Title};
`
const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`
const Arrow = styled.i``
const BtnBack = styled(Link)`
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  border: 1px solid ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.Subtitle};
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
  &:hover ${Arrow} {
    transform: translate(-0.3rem);
  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
function HeaderP() {
  return (
    <Container id='header'>
      <BtnBack to='/'>
        <Arrow className='uil uil-arrow-left' />
        Back
      </BtnBack>
      <Right>
        <Title>
          <TitleSpan>/</TitleSpan>projects
        </Title>
        <Description>List of my projects</Description>
      </Right>
    </Container>
  )
}

export default HeaderP
