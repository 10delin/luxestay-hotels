import { useNavigate } from "react-router-dom";

import { InputDate } from "../../components/InputDate/InputDate";
import { Room } from "../../components/Room/Room";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";

import { StyledContainer, StyledButton, StyledRooms } from "./HomeStyles";
import { useCallback } from "react";

export const Home = () => {
  const { data } = useGetHotelQuery();
  const navigate = useNavigate();

  const handleGoToBookings = useCallback(() => {
    navigate("/bookings");
  }, [navigate]);

  return (
    <StyledContainer>
      <StyledButton onClick={handleGoToBookings} data-cy="goToBookings-button">
        Reservas
      </StyledButton>
      <InputDate />
      <StyledRooms data-cy="rooms-content">
        {data?.rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </StyledRooms>
    </StyledContainer>
  );
};
