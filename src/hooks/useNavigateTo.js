import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useNavigateTo = () => {
  const navigate = useNavigate();
  const navigateTo = useCallback(
    (route) => {
      navigate(route);
    },
    [navigate]
  );
  return navigateTo;
};
