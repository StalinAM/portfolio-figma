import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  max-width: ${(props) => props.theme.WidthSection};
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
`;
const Tag = styled.h2`
  color: ${(props) => props.theme.Subtitle};
  font-size: 2rem;
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
`;
const TagSpan = styled.span`
  color: ${(props) => props.theme.Title};
`;
const Line = styled.div`
  width: 24rem;
  height: 2px;
  background-color: ${(props) => props.theme.Title};
  @media screen and (max-width: 768px) {
    width: 12rem;
  }
  @media screen and (max-width: 480px) {
    width: 7rem;
  }
`;
function Title({ title }) {
  return (
    <Container>
      <Tag title={title}>
        <TagSpan>#</TagSpan>
        {title}
      </Tag>
      <Line />
    </Container>
  );
}

export default Title;
