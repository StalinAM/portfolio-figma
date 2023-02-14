import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../../context/Language'
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
  span {
    font-size: 2rem;
    color: ${(props) => props.theme.Subtitle};
  }
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
function DataPerson() {
  const { texts } = useContext(LanguageContext)
  return (
    <Info>
      <Title>
        {texts.about.name}
        <span> {texts.about.position}</span>
      </Title>
      <Description>{texts.about.description}</Description>
      <Btn href='#contact'>{texts.span.home}</Btn>
    </Info>
  )
}

export default DataPerson
