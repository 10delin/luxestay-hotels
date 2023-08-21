export const validateReservationForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.surname) {
    errors.surname = "Surname is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.country) {
    errors.country = "Country is required";
  }

  if (!values.terms) {
    errors.terms = "You must accept the terms and conditions";
  }

  return errors;
};
