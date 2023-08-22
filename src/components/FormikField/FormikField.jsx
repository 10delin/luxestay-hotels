import { Field } from "formik";
import PropTypes from "prop-types";
import { StyledFormikField } from "./FormikFieldStyles";

export const FormikField = ({ name }) => {
  const types = (name) => {
    switch (name) {
      case "name":
        return "text";
      case "surname":
        return "text";
      case "email":
        return "email";
      case "country":
        return "text";
      case "terms":
        return "checkbox";
      default:
        return "text";
    }
  };

  return (
    <StyledFormikField $name={name}>
      <Field id={name} name={name} type={types(name)} />
      <label htmlFor={name}>
        {name === "terms" ? "Acepto terminos y condiciones" : name}
      </label>
    </StyledFormikField>
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
};
