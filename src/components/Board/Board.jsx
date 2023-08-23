import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRoom } from "../../redux/reducers/roomSlice";

import {
  StyledContainer,
  StyledContent,
  StyledName,
  StyledPrice,
  StyledButton,
} from "./BoardStyles";

export const Board = ({ board, roomName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleState = () => {
    dispatch(
      setRoom({
        roomName: roomName,
        board: board.name,
        price: board.price,
      })
    );
    navigate("/form");
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledName>{board.name}</StyledName>
        <StyledPrice>{`$${board.price}`}</StyledPrice>
        <StyledButton onClick={handleState} data-cy="goToForm-button">
          Reservar
        </StyledButton>
      </StyledContent>
    </StyledContainer>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  roomName: PropTypes.string.isRequired,
};
