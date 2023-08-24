import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 800px;
  height: 120vh;
  padding: calc(5rem + 2vw);
  margin: 0 auto;

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

  h3 {
    font-size: 15px;
    text-transform: uppercase;
  }
`;
