import PropTypes from "prop-types";
import { StyledContainer, StyledName, StyledPrice } from "./BoardStyles";

export const Board = ({ board }) => {
  return (
    <StyledContainer>
      <StyledName>{board.name}</StyledName>
      <StyledPrice>{`$${board.price}`}</StyledPrice>
      <button>Reservar</button>
    </StyledContainer>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
