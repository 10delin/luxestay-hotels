import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledContent,
  StyledName,
  StyledPrice,
  StyledButton,
} from "./BoardStyles";

export const Board = ({ board }) => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledName>{board.name}</StyledName>
        <StyledPrice>{`$${board.price}`}</StyledPrice>
        <StyledButton>Reservar</StyledButton>
      </StyledContent>
    </StyledContainer>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
