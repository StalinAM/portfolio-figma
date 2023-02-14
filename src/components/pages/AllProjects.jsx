import React, { useContext } from 'react'
import { MainContainer } from '../subComponents/Container'
import HeaderP from './allProjects/HeaderP'
import SectionP from './allProjects/SectionP'
import { LanguageContext } from '../../context/Language'

function AllProjects() {
  const { texts } = useContext(LanguageContext)
  return (
    <>
      <HeaderP />
      <MainContainer>
        <SectionP
          title={texts.projects.completeProjects.title}
          listProjects={texts.projects.completeProjects.listProjectComplete}
        />
        <SectionP
          title={texts.components.title}
          listProjects={texts.components.listProjectComponents}
        />
      </MainContainer>
    </>
  )
}

export default AllProjects
