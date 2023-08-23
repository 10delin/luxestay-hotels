import PropTypes from "prop-types";

import { Board } from "../Board/Board";
import { RoomSelected } from "../RoomSelected/RoomSelected";

import { StyledContainer, StyledContentTitle, StyledTitle } from "./RoomStyles";

export const Room = ({ room, selected }) => {
  return (
    <StyledContainer data-cy="room-item">
      <StyledContentTitle>
        <StyledTitle>{room.name || room.roomName}</StyledTitle>
      </StyledContentTitle>
      {selected ? (
        <RoomSelected room={room} />
      ) : (
        room?.boards.map((board, index) => (
          <Board key={index} board={board} roomName={room.name} />
        ))
      )}
    </StyledContainer>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string,
    roomName: PropTypes.string,
    boards: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ),
    dates: PropTypes.string,
    price: PropTypes.number,
    board: PropTypes.string,
  }).isRequired,
  selected: PropTypes.bool,
};
