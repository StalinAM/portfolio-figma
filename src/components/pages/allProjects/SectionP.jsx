import React from 'react'
import styled from 'styled-components'
import { Container } from '../../subComponents/Container'
import BoxCardWork from './BoxCardWork'

const Title = styled.h2`
  font-size: 2rem;
  max-width: 65rem;
  color: ${(props) => props.theme.Subtitle};
  display: block;
  white-space: nowrap;
  border-right: 2px solid;
  width: ${(props) => props.title.length + 1}ch;
  animation: typing 3s steps(${(props) => props.title.length + 1}),
    blink 0.6s infinite;
  overflow: hidden;
  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`
const TitleSpan = styled.span`
  color: ${(props) => props.theme.Title};
`
function SectionP({ title, listProjects }) {
  return (
    <Container>
      <Title title={title}>
        <TitleSpan>#</TitleSpan>
        {title}
      </Title>
      <BoxCardWork listProjects={listProjects} />
    </Container>
  )
}

export default SectionP
