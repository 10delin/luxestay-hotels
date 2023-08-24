import { setLocalStorageItem } from "../utils/localStorageData";

export const useReservationUpdate = (aleatoryNumber, room, form, localRoom) => {
  const updateReservation = () => {
    const bookData = { id: aleatoryNumber, ...room, ...form };
    const updatedRoomList = [bookData, ...localRoom];
    setLocalStorageItem("bookings", updatedRoomList);
  };

  return updateReservation;
};
