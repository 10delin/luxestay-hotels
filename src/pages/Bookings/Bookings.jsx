import { useNavigate } from "react-router-dom";

import { getLocalStorageItem } from "../../utils/localStorageData";
import { Booking } from "../../components/Booking/Booking";

import { StyledContainer } from "./BookingsStyles";

export const Bookings = () => {
  const navigate = useNavigate();
  const localRoom = getLocalStorageItem("bookings");

  return (
    <StyledContainer>
      <h1>Reservas</h1>
      <button onClick={() => navigate("/")} data-cy="goToHome-button">
        Volver al Inicio
      </button>

      {!localRoom ? (
        <p data-cy="no-bookings">No hay reservas</p>
      ) : (
        localRoom.map((room) => (
          <Booking
            key={room.id}
            aleatoryNumber={room.id}
            room={room}
            form={room}
            bookings={true}
          />
        ))
      )}
    </StyledContainer>
  );
};
