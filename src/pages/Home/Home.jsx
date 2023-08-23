import { useNavigate } from "react-router-dom";
import { InputDate } from "../../components/InputDate/InputDate";
import { Room } from "../../components/Room/Room";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";
import { StyledContainer, StyledButton } from "./HomeStyles";

export const Home = () => {
  const { data } = useGetHotelQuery();
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledButton onClick={() => navigate("/bookings")}>
        Reservas
      </StyledButton>
      <InputDate />
      {data?.rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </StyledContainer>
  );
};
