import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #c5c5c5;
`;

export const StyledName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  min-width: 200px;
  text-transform: capitalize;
`;

export const StyledPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #019592;
  min-width: 200px;
  text-align: center;
`;
