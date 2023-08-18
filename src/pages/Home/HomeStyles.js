import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(5rem + 2vw);

  @media (max-width: 768px) {
    padding: calc(2rem + 2vw);
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;
