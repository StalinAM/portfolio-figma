import React, { useContext } from 'react'
import styled from 'styled-components'
import Title from '../../subComponents/Title'
import { Link } from 'react-router-dom'
import { Container } from '../../subComponents/Container'
import BoxCardWork from '../../pages/allProjects/BoxCardWork'
import { LanguageContext } from '../../../context/Language'

const Arrow = styled.i``
const ViewAll = styled(Link)`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  margin-top: 4rem;
  border: 1px solid ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.Subtitle};
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
  &:hover ${Arrow} {
    transform: translate(0.3rem);
  }
`
function Projects() {
  const { texts } = useContext(LanguageContext)
  return (
    <Container id='projects'>
      <Title title={texts.projects.title} />
      <BoxCardWork
        listProjects={texts.projects.completeProjects.listProjectComplete
          .reverse()
          .slice(0, 6)}
      />
      <ViewAll to='/all-projects'>
        {texts.span.projects}
        <Arrow className='uil uil-arrow-right' />
      </ViewAll>
    </Container>
  )
}

export default Projects
