import { useGetHotelQuery } from "../../redux/features/hotelsApi";

export const InputDate = () => {
  const { data } = useGetHotelQuery();
  return (
    <div>
      <p>{data?.dates.checkin}</p>
      <p>{data?.dates.checkout}</p>
    </div>
  );
};
