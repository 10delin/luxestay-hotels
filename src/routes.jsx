import { Route, Routes, useNavigate } from "react-router-dom";

import { Home } from "./pages/Home/Home.jsx";
import { Reservation } from "./pages/Reservation/Reservation.jsx";
import { Form } from "./pages/Form/Form.jsx";
import { Bookings } from "./pages/Bookings/Bookings.jsx";

export const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      <Routes navigate={(to) => navigate(to)}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
