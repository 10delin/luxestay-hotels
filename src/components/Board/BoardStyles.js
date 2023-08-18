import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: 100%;
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
  font-size: 1rem;
  font-weight: 600;
  min-width: 11rem;
  color: #000;
  text-transform: capitalize;

  @media (max-width: 768px) {
    min-width: 8rem;
    font-size: 0.8rem;
  }
`;

export const StyledPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #019592;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const StyledButton = styled.button`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
