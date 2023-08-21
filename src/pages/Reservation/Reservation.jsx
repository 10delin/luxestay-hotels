import { useSelector } from "react-redux";
import { FormikForm } from "../../components/FormikForm/FormikForm";
import { Room } from "../../components/Room/Room";
import { StyledContainer } from "./ReservationStyles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Reservation = () => {
  const room = useSelector((state) => state.actualRoom);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!room.name) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <h1>Resumen de tu reserva</h1>
      <Room room={room} selected />
      <h4>Tus datos</h4>
      <FormikForm room={room} />
    </StyledContainer>
  );
};
