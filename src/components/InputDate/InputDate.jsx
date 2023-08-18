import { useGetHotelQuery } from "../../redux/features/hotelsApi";
import { StyledContainer } from "./InputDateStyles";

export const InputDate = () => {
  const { data } = useGetHotelQuery();

  const formatDate = (date) => {
    if (!date) return;
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <StyledContainer>
      <span>📅</span>
      <span>{formatDate(data?.dates.checkin)}</span>
      <span>-</span>
      <span>{formatDate(data?.dates.checkout)}</span>
    </StyledContainer>
  );
};
