import { InputDate } from "../../components/InputDate/InputDate";
import { Room } from "../../components/Room/Room";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { useTranslation } from "react-i18next";

import { StyledContainer, StyledButton, StyledRooms } from "./HomeStyles";
import { Spinner } from "../../components/Spinner/Spinner";

export const Home = () => {
  const { data, isLoading } = useGetHotelQuery();
  const navigateTo = useNavigateTo();
  const { t } = useTranslation();

  if (isLoading) return <Spinner />;

  return (
    <StyledContainer>
      <StyledButton
        onClick={() => navigateTo("/bookings")}
        data-cy="goToBookings-button"
      >
        {t("home.goToBookingsButton")}
      </StyledButton>
      <InputDate />
      <StyledRooms data-cy="rooms-content">
        {data?.rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </StyledRooms>
    </StyledContainer>
  );
};
