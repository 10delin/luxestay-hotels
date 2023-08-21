import PropTypes from "prop-types";
import { Board } from "../Board/Board";
import { StyledContainer, StyledContentTitle, StyledTitle } from "./RoomStyles";
import { RoomSelected } from "../RoomSelected/RoomSelected";

export const Room = ({ room, selected }) => {
  return (
    <StyledContainer>
      <StyledContentTitle>
        <StyledTitle>{room.name}</StyledTitle>
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
    name: PropTypes.string.isRequired,
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
