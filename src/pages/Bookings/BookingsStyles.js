import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 10px 20px;
  margin: 10px;
  max-width: 800px;
  margin: 0 auto;
  padding: calc(5rem + 2vw);
  max-width: 800px;

  @media (max-width: 768px) {
    padding: calc(2rem + 2vw);
  }

  @media (max-width: 500px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: calc(2rem + 2vw);
  }

  @media (max-width: 500px) {
    padding: 10px;
  }

  h1 {
    margin: 0;
  }
`;
