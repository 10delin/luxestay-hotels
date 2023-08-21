import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(5rem + 2vw);
  height: 100vh;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: calc(2rem + 2vw);
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;
