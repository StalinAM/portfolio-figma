import styled from "styled-components";

const Container = styled.section`
  padding: 6rem 0 2rem;
`;
const MainContainer = styled.main`
  padding: 0 9rem;
  @media screen and (max-width: 1080px) {
    padding: 0 6rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;
export { Container, MainContainer };
