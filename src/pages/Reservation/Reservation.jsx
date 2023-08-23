import { useSelector } from "react-redux";
import { StyledContainer } from "./ReservationStyles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localStorageData";
import { Booking } from "../../components/Booking/Booking";

export const Reservation = () => {
  const room = useSelector((state) => state.actualRoom);
  const form = useSelector((state) => state.actualForm);

  const [aleatoryNumber] = useState(Math.floor(Math.random() * 1000000));
  const [counter, setCounter] = useState(5);

  const navigate = useNavigate();
  const localRoom = getLocalStorageItem("bookings") || [];

  useEffect(() => {
    setLocalStorageItem("bookings", [
      { id: aleatoryNumber, ...room, ...form },
      ...localRoom,
    ]);

    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room, form]);

  return (
    <StyledContainer>
      <Booking
        room={room}
        form={form}
        aleatoryNumber={aleatoryNumber}
        counter={counter}
      />
    </StyledContainer>
  );
};
