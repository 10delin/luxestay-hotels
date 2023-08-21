import { Field } from "formik";
import PropTypes from "prop-types";

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

  return name !== "terms" ? (
    <>
      <label htmlFor={name}>{name}</label>
      <Field id={name} name={name} type={types(name)} />
    </>
  ) : (
    <>
      <Field id={name} name={name} type={types(name)} />
      <label htmlFor={name}>{name}</label>
    </>
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
};
