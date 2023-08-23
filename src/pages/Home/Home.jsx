import { useNavigate } from "react-router-dom";

import { InputDate } from "../../components/InputDate/InputDate";
import { Room } from "../../components/Room/Room";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";

import { StyledContainer, StyledButton, StyledRooms } from "./HomeStyles";

export const Home = () => {
  const { data } = useGetHotelQuery();
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledButton
        onClick={() => navigate("/bookings")}
        data-cy="goToBookings-button"
      >
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
