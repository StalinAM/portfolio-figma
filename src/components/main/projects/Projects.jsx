import React, { useContext } from 'react'
import styled from 'styled-components'
import Title from '../../subComponents/Title'
import { Link } from 'react-router-dom'
import { Container } from '../../subComponents/Container'
import BoxCardWork from '../../pages/allProjects/BoxCardWork'
import { LanguageContext } from '../../../context/Language'

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
  &:hover svg {
    transform: translate(0.3rem);
  }
  svg {
    color: ${(props) => props.theme.Subtitle};
    width: 12px;
  }
`
function Projects() {
  const { texts } = useContext(LanguageContext)
  return (
    <Container id='projects'>
      <Title title={texts.projects.title} />
      <BoxCardWork
        listProjects={texts.projects.completeProjects.listProjectComplete.slice(
          0,
          6
        )}
      />
      <ViewAll to='/all-projects'>
        {texts.span.projects}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 12 14'
        >
          <path d='M11.92 6.62a1 1 0 0 0-.21-.33l-5-5a1.004 1.004 0 1 0-1.42 1.42L8.59 6H1a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z' />
        </svg>
      </ViewAll>
    </Container>
  )
}

export default Projects
