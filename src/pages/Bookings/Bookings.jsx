import { getLocalStorageItem } from "../../utils/localStorageData";
import { Booking } from "../../components/Booking/Booking";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { useTranslation } from "react-i18next";

import { StyledContainer } from "./BookingsStyles";

export const Bookings = () => {
  const localRoom = getLocalStorageItem("bookings");
  const navigateTo = useNavigateTo();
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <h1>{t("bookings.title")}</h1>
      <button onClick={() => navigateTo("/")} data-cy="goToHome-button">
        {t("bookings.goBackHome")}
      </button>

      {!localRoom ? (
        <p data-cy="no-bookings">{t("bookings.noBooks")}</p>
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
