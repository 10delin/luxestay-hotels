import styled from "styled-components";

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`;

export const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding-left: 2rem;
  p {
    margin: 0;
  }
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StyledDates = styled.p`
  font-size: 16px;
`;

export const StyledDescription = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
  font-weight: 700;
`;
