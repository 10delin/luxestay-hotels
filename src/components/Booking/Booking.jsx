import PropTypes from "prop-types";

import checkImage from "../../assets/images/check.webp";
import { useTranslation } from "react-i18next";

import {
  StyledContainer,
  StyledMain,
  StyledImage,
  StyledRoom,
  StyledRoomName,
  StyledRoomBoard,
  StyledPrice,
  StyledPriceTitle,
  StyledUser,
  StyledUserName,
  StyledUserCountry,
} from "./BookingStyles";

export const Booking = ({ room, form, aleatoryNumber, counter, bookings }) => {
  const { t } = useTranslation();

  return (
    <StyledContainer $bookings={bookings} data-cy="booking-item">
      {!bookings ? (
        <StyledMain>
          <h2>
            {t("reservation.title")} {counter} {t("reservation.titleSec")}
          </h2>
          <StyledImage src={checkImage}></StyledImage>
          <h2>
            {t("reservation.bookTitle")} {`Y${aleatoryNumber}`}
          </h2>
        </StyledMain>
      ) : (
        <h2>
          {t("reservation.bookTitle")} {`Y${aleatoryNumber}`}
        </h2>
      )}

      <StyledRoom>
        <StyledRoomName>{room.roomName}</StyledRoomName>
        <p>{room.dates}</p>
        <StyledRoomBoard>{room.board}</StyledRoomBoard>
      </StyledRoom>
      <StyledPrice>
        <StyledPriceTitle>{`Total: $${room.price}`}</StyledPriceTitle>
      </StyledPrice>
      <StyledUser>
        <StyledUserName>
          {form.name}
          {form.surname}
        </StyledUserName>
        <p>{form.email}</p>
        <StyledUserCountry>{form.country}</StyledUserCountry>
      </StyledUser>
    </StyledContainer>
  );
};

Booking.propTypes = {
  room: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  aleatoryNumber: PropTypes.number.isRequired,
  counter: PropTypes.number,
  bookings: PropTypes.bool,
};
