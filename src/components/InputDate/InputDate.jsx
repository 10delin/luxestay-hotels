import { useDispatch } from "react-redux";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";
import { StyledContainer } from "./InputDateStyles";
import { setRoom } from "../../redux/reducers/roomSlice";
import { useEffect } from "react";
import { Spinner } from "../Spinner/Spinner";

export const InputDate = () => {
  const { data, isLoading } = useGetHotelQuery();
  const dispatch = useDispatch();

  const formatDate = (date) => {
    if (!date) return;
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };
  const formatDates = `${formatDate(data?.dates.checkin)} - ${formatDate(
    data?.dates.checkout
  )}`;

  useEffect(() => {
    dispatch(
      setRoom({
        dates: formatDates,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) return <Spinner />;

  return (
    <StyledContainer>
      <span>📅</span>
      <span>{formatDates}</span>
    </StyledContainer>
  );
};
