import { InputDate } from "../../components/InputDate/InputDate";
import { Room } from "../../components/Room/Room";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";
import { StyledContainer } from "./HomeStyles";

export const Home = () => {
  const { data } = useGetHotelQuery();
  return (
    <StyledContainer>
      <InputDate />
      {data?.rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </StyledContainer>
  );
};
