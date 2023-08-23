import { styled } from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: left;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #ebeaea;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  ${({ $bookings }) => $bookings && `padding: 20px 0;`}

  h2 {
    margin: 0;
  }
`;

export const StyledMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: left;
  padding: 70px 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #ebeaea;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const StyledImage = styled.img`
  width: 300px;
  height: 300px;
`;

export const StyledRoom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  gap: 5px;
  width: -webkit-fill-available;
  height: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #ebeaea;

  p {
    margin: 0;
  }
`;

export const StyledRoomName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledRoomBoard = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const StyledPrice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px 30px;
  gap: 5px;
  width: -webkit-fill-available;
  height: 100%;
  margin: 0 auto;
  border-bottom: 2px solid #ebeaea;
`;

export const StyledPriceTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const StyledUser = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  gap: 5px;
  width: -webkit-fill-available;
  height: 100%;
  margin: 0 auto;

  p {
    margin: 0;
  }
`;

export const StyledUserName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledUserCountry = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`;
