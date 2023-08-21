import { useSelector } from "react-redux";
import { FormikForm } from "../../components/FormikForm/FormikForm";
import { Room } from "../../components/Room/Room";
import { StyledContainer } from "./ReservationStyles";

export const Reservation = () => {
  const room = useSelector((state) => state.actualRoom);

  return (
    <StyledContainer>
      <h1>Resumen de tu reserva</h1>
      <Room room={room} selected />
      <h3>Tus datos</h3>
      <FormikForm />;
    </StyledContainer>
  );
};
