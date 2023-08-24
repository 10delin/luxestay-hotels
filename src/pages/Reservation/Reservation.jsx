import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getLocalStorageItem } from "../../utils/localStorageData";
import { Booking } from "../../components/Booking/Booking";
import { INTERVAL_DURATION, TOTAL_SECONDS } from "../../utils/model";
import { useNavigateTo } from "../../hooks/useNavigateTo";

import { StyledContainer } from "./ReservationStyles";
import { useReservationUpdate } from "../../hooks/useReservationUpdate";

export const Reservation = () => {
  const actualRoom = useSelector((state) => state.actualRoom);
  const actualForm = useSelector((state) => state.actualForm);

  const [aleatoryNumber] = useState(Math.floor(Math.random() * 1000000));
  const [counter, setCounter] = useState(TOTAL_SECONDS);

  const navigateTo = useNavigateTo();
  const localRoom = getLocalStorageItem("bookings") || [];

  const updateReservation = useReservationUpdate(
    aleatoryNumber,
    actualRoom,
    actualForm,
    localRoom
  );

  useEffect(() => {
    updateReservation();

    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, INTERVAL_DURATION);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      navigateTo("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualRoom, actualForm]);

  return (
    <StyledContainer>
      <Booking
        room={actualRoom}
        form={actualForm}
        aleatoryNumber={aleatoryNumber}
        counter={counter}
      />
    </StyledContainer>
  );
};
