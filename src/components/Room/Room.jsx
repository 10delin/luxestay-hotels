import PropTypes from "prop-types";
import { Board } from "../Board/Board";

export const Room = ({ room }) => {
  return (
    <div>
      <h2>{room.name}</h2>
      {room.boards.map((board, index) => (
        <Board key={index} board={board} />
      ))}
    </div>
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
