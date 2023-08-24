import { useEffect } from "react";

import { useSelector } from "react-redux";
import { FormikForm } from "../../components/FormikForm/FormikForm";
import { Room } from "../../components/Room/Room";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { useTranslation } from "react-i18next";

import { StyledContainer } from "./FormStyles";

export const Form = () => {
  const room = useSelector((state) => state.actualRoom);
  const navigateTo = useNavigateTo();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!room.roomName) {
      navigateTo("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <h1>{t("form.title")}</h1>
      <Room room={room} selected />
      <h3>{t("form.titleData")}</h3>
      <FormikForm room={room} />
    </StyledContainer>
  );
};
