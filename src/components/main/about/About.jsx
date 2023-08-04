import React from 'react'
import styled from 'styled-components'
import Title from '../../subComponents/Title'
import imageHome from '../../../assets/about.png'
import { Container } from '../../subComponents/Container'

function About() {
  return (
    <Container id='about'>
      <Title title='about-me' />
      <Content>
        <Left>
          <Text>Hi, I'm Stalin!</Text>
          <Text>
            I love creating all kinds of things for the web. My history in
            technology was when I was a high school student when I wanted to
            customize my PC, I found several tutorials on the internet where
            they showed how to do it and I was fascinated by this world.
          </Text>
          <Text>
            For some time I learned several things about Computer Science
            including programming in languages like C, Java, Python, but a long
            time ago I discovered my passion for the world of web development
            and the beauty behind building interactive websites like the ones
            you will find in <TextLink href='#projects'>My portfolio</TextLink>.
            Now I am looking for a developer position so I can learn and polish
            my skills among professionals.
          </Text>
        </Left>
        <ImageHome
          src={imageHome}
          width='520'
          height='520'
          alt='illustration of Stalin who is in front of a laptop where he programs'
        />
      </Content>
    </Container>
  )
}

export default About

const Content = styled.div`
  max-width: ${(props) => props.theme.WidthSection};
  margin: 3rem auto 0;
  display: grid;
  gap: 2.5rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.Description};
`
const TextLink = styled.a`
  color: ${(props) => props.theme.Title};
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`
const ImageHome = styled.img`
  width: 100%;
`
