import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(5rem + 2vw);
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: calc(2rem + 2vw);
  }

  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const StyledRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const StyledButton = styled.button`
  background-color: #eb9502;
  color: white;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    background-color: #c27b02;
  }
`;
