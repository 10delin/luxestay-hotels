import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: calc(5rem + 2vw);
  height: 120vh;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: calc(2rem + 2vw);
  }

  @media (max-width: 500px) {
    padding: 10px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: calc(1.5rem + 1vw);
  }

  h4 {
    text-transform: uppercase;
  }
`;
