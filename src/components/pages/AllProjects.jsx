import React, { useContext } from 'react'
import { MainContainer } from '../subComponents/Container'
import HeaderP from './allProjects/HeaderP'
import SectionP from './allProjects/SectionP'
import { LanguageContext } from '../../context/Language'

function AllProjects() {
  const { texts } = useContext(LanguageContext)
  const complete = texts.projects.completeProjects.listProjectComplete.reverse()
  const components = texts.components.listProjectComponents.reverse()
  return (
    <>
      <HeaderP />
      <MainContainer>
        <SectionP
          title={texts.projects.completeProjects.title}
          listProjects={complete}
        />
        <SectionP title={texts.components.title} listProjects={components} />
      </MainContainer>
    </>
  )
}

export default AllProjects
