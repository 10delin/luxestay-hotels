import { InputDate } from "../../components/InputDate/InputDate";
import { Room } from "../../components/Room/Room";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";

export const Home = () => {
  const { data } = useGetHotelQuery();
  return (
    <div className="App">
      <InputDate />
      {data?.rooms.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>
  );
};
