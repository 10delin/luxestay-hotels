import { expect, test } from "vitest";
import { ErrorsForm } from "./ErrorsForm";

test("renders nothing when there are no errors", () => {
  const errors = {};
  const result = ErrorsForm({ errors });

  expect(result).toBe(false);
});

test("renders error messages when there are errors", () => {
  const errors = {
    name: "Nombre obligatorio",
    email: "Email no válido",
  };
  const result = ErrorsForm({ errors });

  expect(result).toBeTruthy();
});
