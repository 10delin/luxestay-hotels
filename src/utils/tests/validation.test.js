import { expect, test } from "vitest";
import { validateReservationForm } from "../validation";

test("should return errors for empty values", () => {
  const values = {
    name: "",
    surname: "",
    email: "",
    terms: false,
  };

  const errors = validateReservationForm(values);

  expect(errors.name).toBe("Nombre obligatorio");
  expect(errors.surname).toBe("Apellido obligatorio");
  expect(errors.email).toBe("Email obligatorio");
  expect(errors.terms).toBe("Debes aceptar los términos y condiciones");
});

test("should return error for invalid email", () => {
  const values = {
    name: "Antonio",
    surname: "Delage",
    email: "hola",
    terms: true,
  };

  const errors = validateReservationForm(values);

  expect(errors.email).toBe("Email no válido");
});

test("should return empty errors object for valid values", () => {
  const values = {
    name: "Antonio",
    surname: "Delage",
    email: "antonio@email.com",
    terms: true,
  };

  const errors = validateReservationForm(values);

  expect(Object.keys(errors).length).toBe(0);
});
