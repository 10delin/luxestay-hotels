import { getLocalStorageItem } from "../../utils/localStorageData";
import { Booking } from "../../components/Booking/Booking";

import { StyledContainer } from "./BookingsStyles";
import { useNavigateTo } from "../../hooks/useNavigateTo";

export const Bookings = () => {
  const localRoom = getLocalStorageItem("bookings");
  const navigateTo = useNavigateTo();

  return (
    <StyledContainer>
      <h1>Reservas</h1>
      <button onClick={() => navigateTo("/")} data-cy="goToHome-button">
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
