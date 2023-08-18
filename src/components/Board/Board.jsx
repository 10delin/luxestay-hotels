import PropTypes from "prop-types";

export const Board = ({ board }) => {
  return (
    <div>
      <p>{board.name}</p>
      <p>{board.price}</p>
      <button>Reservar</button>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
