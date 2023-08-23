import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getLocalStorageItem } from "../../utils/localStorageData";
import { Booking } from "../../components/Booking/Booking";
import { INTERVAL_DURATION, TOTAL_SECONDS } from "../../utils/model";

import { StyledContainer } from "./ReservationStyles";
import { useReservationUpdate } from "../../hooks/useReservationUpdate";

export const Reservation = () => {
  const { actualRoom: room, actualForm: form } = useSelector((state) => state);

  const [aleatoryNumber] = useState(Math.floor(Math.random() * 1000000));
  const [counter, setCounter] = useState(TOTAL_SECONDS);

  const navigate = useNavigate();
  const localRoom = getLocalStorageItem("bookings") || [];

  const updateReservation = useReservationUpdate(
    aleatoryNumber,
    room,
    form,
    localRoom
  );

  useEffect(() => {
    updateReservation();

    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, INTERVAL_DURATION);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
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
