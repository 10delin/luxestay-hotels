import { useSelector } from "react-redux";
import { FormikForm } from "../../components/FormikForm/FormikForm";

export const Reservation = () => {
  const room = useSelector((state) => state.actualRoom);

  return (
    <div>
      <div>
        <p>Reservation</p>
        <p>{room.dates}</p>
        <p>{room.name}</p>
        <p>{room.price} </p>
        <p>{room.board}</p>
      </div>
      <FormikForm />;
    </div>
  );
};
