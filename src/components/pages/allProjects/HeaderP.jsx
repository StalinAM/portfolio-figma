import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LanguageContext } from '../../../context/Language'
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
  &:hover svg {
    transform: translate(-0.3rem);
  }
  svg {
    width: 12px;
  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
function HeaderP() {
  const { texts } = useContext(LanguageContext)
  return (
    <Container id='header'>
      <BtnBack to='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 12 14'
        >
          <path d='M11 6H3.41l3.3-3.29a1.004 1.004 0 0 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a.998.998 0 0 0 1.42 0 .999.999 0 0 0 0-1.42L3.41 8H11a1 1 0 1 0 0-2Z' />
        </svg>
        {texts.span.button}
      </BtnBack>
      <Right>
        <Title>
          <TitleSpan>/</TitleSpan>
          {texts.projects.title}
        </Title>
        <Description>{texts.span.subtitle}</Description>
      </Right>
    </Container>
  )
}

export default HeaderP
