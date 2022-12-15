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
    filter: ${(props) => (props.show ? "blur(5px) brightness(0.7)" : "none")};
    padding: 0 3rem;
    pointer-events: ${(props) => (props.show ? "none" : "")};
    user-select: ${(props) => (props.show ? "none" : "")};
    overflow-x: hidden;
    overflow-y: hidden;
  }
  @media screen and (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;
export { Container, MainContainer };
