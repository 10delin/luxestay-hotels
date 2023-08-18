import { Route, Routes, useNavigate } from "react-router-dom";

import { Home } from "./pages/Home/Home.jsx";
import { Reservation } from "./pages/Reservation/Reservation.jsx";

export const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <>
      <Routes navigate={(to) => navigate(to)}>
        <Route path="/" element={<Home />} />
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
