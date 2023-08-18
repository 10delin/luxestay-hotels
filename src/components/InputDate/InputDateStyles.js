import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  max-width: 800px;
  margin: 30px 0;
  border-bottom: 1px solid #081f2c;

  span {
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
