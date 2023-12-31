import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #c5c5c5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

export const StyledContentTitle = styled.div`
  display: flex;
  width: 100%;
  background-color: #081f2c;
  border: 1px solid #081f2c;
`;
export const StyledTitle = styled.h2`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 15px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
