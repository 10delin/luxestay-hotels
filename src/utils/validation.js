export const validateReservationForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Nombre obligatorio";
  }

  if (!values.surname) {
    errors.surname = "Apellido obligatorio";
  }

  if (!values.email) {
    errors.email = "Email obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email no válido";
  }

  if (!values.terms) {
    errors.terms = "Debes aceptar los términos y condiciones";
  }

  return errors;
};
