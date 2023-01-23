import React from 'react'
import styled from 'styled-components'
const Info = styled.div`
  justify-items: start;
  display: grid;
  gap: 2rem;
`
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 3rem;
  color: ${(props) => props.theme.Title};
`
const Description = styled.p`
  font-size: 1rem;
  padding-right: 2rem;
  color: ${(props) => props.theme.Description};
`
const Btn = styled.a`
  color: ${(props) => props.theme.Subtitle};
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
`
const TitleSpan = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.Subtitle};
`
function DataPerson() {
  return (
    <Info>
      <Title>
        Stalin Acurio
        <TitleSpan> Frontend developer</TitleSpan>
      </Title>
      <Description>
        I'm excited to work on projects from the ground up and see them running
        in a browser.
      </Description>
      <Btn href='#contact'>Contact me!</Btn>
    </Info>
  )
}

export default DataPerson
