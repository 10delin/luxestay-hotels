import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { setRoom } from "../../redux/reducers/roomSlice";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { useTranslation } from "react-i18next";

import {
  StyledContainer,
  StyledContent,
  StyledName,
  StyledPrice,
  StyledButton,
} from "./BoardStyles";

export const Board = ({ board, roomName }) => {
  const dispatch = useDispatch();
  const navigateTo = useNavigateTo();
  const { t } = useTranslation();

  const handleState = () => {
    dispatch(
      setRoom({
        roomName: roomName,
        board: board.name,
        price: board.price,
      })
    );
    navigateTo("/form");
  };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledName>{board.name}</StyledName>
        <StyledPrice>{`$${board.price}`}</StyledPrice>
        <StyledButton onClick={handleState} data-cy="goToForm-button">
          {t("home.bookButton")}
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
