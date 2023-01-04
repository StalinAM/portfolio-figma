import React from "react";
import styled from "styled-components";
const Container = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.Description};
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.5s ease 0s;
  &:hover {
    transform: translateY(-1rem);
    border: 2px solid ${(props) => props.theme.Title};
  }
`;
const ImgProject = styled.img`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const BoxTools = styled.ul`
  display: flex;
  gap: 1.3rem;
  padding: 0.5rem 1rem;
`;
const Tools = styled.li`
  color: ${(props) => props.theme.Description};
  font-size: 0.8rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.Subtitle};
`;
const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.Description};
`;
const BtnC = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconGit = styled.a`
  font-size: 2.1rem;
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.Subtitle};
  }
`;
function WorkCard({ id, image, title, description, web, tools, github }) {
  return (
    <a key={id} href={web} target="_blank">
      <Container>
        {image && <ImgProject src={image} alt={description} />}
        <Content>
          <Details>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <BtnC>
              <IconGit href={github} aria-label="Github Link" target="_blank">
                <i className="uil uil-github"></i>
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
    </a>
  );
}

export default WorkCard;
