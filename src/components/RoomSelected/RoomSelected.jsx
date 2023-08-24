import PropTypes from "prop-types";

import {
  StyledContent,
  StyledBoard,
  StyledDates,
  StyledDescription,
  StyledPrice,
} from "./RoomSelectedStyles";

export const RoomSelected = ({ room }) => {
  return (
    <StyledContent>
      <StyledBoard>
        <StyledDates>{room.dates}</StyledDates>
        <StyledDescription>{room.board}</StyledDescription>
      </StyledBoard>
      <StyledPrice>
        <p>{`$${room.price}`} </p>
      </StyledPrice>
    </StyledContent>
  );
};

RoomSelected.propTypes = {
  room: PropTypes.shape({
    board: PropTypes.string.isRequired,
    dates: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  reserved: PropTypes.bool,
};
