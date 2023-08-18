import { useSelector } from "react-redux";

export const Reservation = () => {
  const room = useSelector((state) => state.actualRoom);
  return (
    <div className="App">
      <header className="App-header">
        <p>Reservation</p>
        <p>{room.dates}</p>
        <p>{room.name}</p>
        <p>{room.price} </p>
        <p>{room.board}</p>
      </header>
    </div>
  );
};
