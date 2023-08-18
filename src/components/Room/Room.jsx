import PropTypes from "prop-types";
import { Board } from "../Board/Board";
import { StyledContainer, StyledContentTitle, StyledTitle } from "./RoomStyles";

export const Room = ({ room }) => {
  return (
    <StyledContainer>
      <StyledContentTitle>
        <StyledTitle>{room.name}</StyledTitle>
      </StyledContentTitle>

      {room?.boards.map((board, index) => (
        <Board key={index} board={board} roomName={room.name} />
      ))}
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
    ).isRequired,
  }).isRequired,
};
