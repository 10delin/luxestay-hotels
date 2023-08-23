import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { Home } from "./pages/Home/Home.jsx";
import { Reservation } from "./pages/Reservation/Reservation.jsx";
import { Form } from "./pages/Form/Form.jsx";
import { Bookings } from "./pages/Bookings/Bookings.jsx";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.actualForm);
  const { roomName } = useSelector((state) => state.actualRoom);

  return (
    <>
      <Routes navigate={(to) => navigate(to)}>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={roomName ? <Form /> : <Navigate to="/" replace />}
        />
        <Route
          path="/reservation"
          element={name ? <Reservation /> : <Navigate to="/" replace />}
        />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
