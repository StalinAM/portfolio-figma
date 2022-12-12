import React from "react";
import styled from "styled-components";
import Work from "../../../assets/image1.png";
const Container = styled.li`
  border: 1px solid ${(props) => props.theme.Description};
`;
const ImgProject = styled.img`
  width: 20rem;
`;
const BoxTools = styled.ul`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.Description};
  gap: 0.5rem;
  padding: 0.5rem 1rem;
`;
const Tools = styled.li`
  color: ${(props) => props.theme.Description};
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
const Arrow = styled.i`
  font-size: 1rem;
`;
const LiveBtn = styled.a`
  display: flex;
  gap: 0.5rem;
  border: 1px solid ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.Subtitle};
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
  &:hover ${Arrow} {
    transform: translate(0.25rem);
  }
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
    <Container key={id}>
      <ImgProject src={image} />
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BtnC>
          <LiveBtn href={web} target="_blank">
            Live<Arrow className="uil uil-arrow-right"></Arrow>
          </LiveBtn>
          <IconGit href={github} target="_blank">
            <i className="uil uil-github"></i>
          </IconGit>
        </BtnC>
      </Details>
      <BoxTools>
        {tools.map((item, index) => (
          <Tools key={index}>{item}</Tools>
        ))}
      </BoxTools>
    </Container>
  );
}

export default WorkCard;
