import { useEffect } from "react";

import { useSelector } from "react-redux";
import { FormikForm } from "../../components/FormikForm/FormikForm";
import { Room } from "../../components/Room/Room";
import { useNavigateTo } from "../../hooks/useNavigateTo";

import { StyledContainer } from "./FormStyles";

export const Form = () => {
  const room = useSelector((state) => state.actualRoom);
  const navigateTo = useNavigateTo();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!room.roomName) {
      navigateTo("/");
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
