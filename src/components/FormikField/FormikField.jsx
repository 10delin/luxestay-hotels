import PropTypes from "prop-types";

import { Field } from "formik";

import { StyledFormikField } from "./FormikFieldStyles";

export const FormikField = ({ name, type, label, dataCy }) => {
  return (
    <StyledFormikField $name={name}>
      <Field id={name} name={name} type={type} data-cy={dataCy} />
      <label htmlFor={name}>{label}</label>
    </StyledFormikField>
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataCy: PropTypes.string.isRequired,
};
