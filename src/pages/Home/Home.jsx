import { InputDate } from "../../components/InputDate/InputDate";
import { Room } from "../../components/Room/Room";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";
import { useNavigateTo } from "../../hooks/useNavigateTo";

import { StyledContainer, StyledButton, StyledRooms } from "./HomeStyles";
import { Spinner } from "../../components/Spinner/Spinner";

export const Home = () => {
  const { data,isLoading } = useGetHotelQuery();
  const navigateTo = useNavigateTo();

  if (isLoading) return <Spinner />;

  return (
    <StyledContainer>
      <StyledButton
        onClick={() => navigateTo("/bookings")}
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
