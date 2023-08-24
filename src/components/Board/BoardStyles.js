import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
  &:not(:last-child) {
    border-bottom: 1px solid #c5c5c5;
  }
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 15px;
`;

export const StyledName = styled.p`
  min-width: 175px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-transform: capitalize;

  @media (max-width: 768px) {
    min-width: 130px;
    font-size: 14px;
  }
`;

export const StyledPrice = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #019592;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
