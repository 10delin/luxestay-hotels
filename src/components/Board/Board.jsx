import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledContent,
  StyledName,
  StyledPrice,
  StyledButton,
} from "./BoardStyles";
import { useDispatch } from "react-redux";
import { setRoom } from "../../redux/reducers/roomSlice";
import { useNavigate } from "react-router-dom";

export const Board = ({ board, roomName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleState = () => {
    dispatch(
      setRoom({
        name: roomName,
        board: board.name,
        price: board.price,
      })
    );
    navigate("/reservation");
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledName>{board.name}</StyledName>
        <StyledPrice>{`$${board.price}`}</StyledPrice>
        <StyledButton onClick={handleState}>Reservar</StyledButton>
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
