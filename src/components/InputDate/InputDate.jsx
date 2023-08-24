import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useGetHotelQuery } from "../../redux/features/hotelsApi";
import { setRoom } from "../../redux/reducers/roomSlice";
import { Spinner } from "../Spinner/Spinner";

import { StyledContainer } from "./InputDateStyles";

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
