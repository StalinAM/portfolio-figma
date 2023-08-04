import React from 'react'
import styled from 'styled-components'
const Container = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.Description};
  transition: transform 0.5s ease 0s;
  &:hover {
    transform: translateY(-1rem);
    border: 2px solid ${(props) => props.theme.Title};
  }
  position: relative;
`
const ImgProject = styled.img`
  width: 100%;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const BoxTools = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0rem;
  padding: 0 1rem 0.5rem;
`
const Tools = styled.li`
  color: ${(props) => props.theme.Description};
  font-size: 0.8rem;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`
const Title = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.Subtitle};
`
const LinkLive = styled.a`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`
const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.Description};
`
const BtnC = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const IconGit = styled.a`
  z-index: 13;
  svg {
    width: 28px;
  }
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
`
function WorkCard({ id, image, title, description, web, tools, github }) {
  return (
    <Container key={id}>
      {image && <ImgProject src={image} alt={description} />}
      <Content>
        <Details>
          <Title>
            {title}
            <LinkLive href={web} target='_blank' />
          </Title>
          <Description>{description}</Description>
          <BtnC>
            <IconGit href={github} aria-label='Github Link' target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.637 3.637 0 0 0-1.025-1.413c-.35-.187-.85-.65-.012-.662a2.001 2.001 0 0 1 1.537 1.025 2.137 2.137 0 0 0 2.913.825c.043-.509.27-.984.637-1.338-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025.37.839.406 1.786.1 2.65A3.869 3.869 0 0 1 16.4 9.722c0 3.837-2.337 4.687-4.562 4.937a2.367 2.367 0 0 1 .675 1.85c0 1.338-.013 2.413-.013 2.75 0 .263.188.575.688.475A10.005 10.005 0 0 0 10 .247Z' />
              </svg>
            </IconGit>
          </BtnC>
        </Details>
        <footer>
          <BoxTools>
            {tools.map((item, index) => (
              <Tools key={index}>{item}</Tools>
            ))}
          </BoxTools>
        </footer>
      </Content>
    </Container>
  )
}

export default WorkCard
