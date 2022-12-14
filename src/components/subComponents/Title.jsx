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
  font-weight: 500;
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
      <Tag>
        <TagSpan>#</TagSpan>
        {title}
      </Tag>
      <Line />
    </Container>
  );
}

export default Title;
