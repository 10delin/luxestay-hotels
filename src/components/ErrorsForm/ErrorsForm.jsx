import PropTypes from "prop-types";

import { StyledContainer } from "./ErrorsFormStyles";

export const ErrorsForm = ({ errors }) => {
  return (
    Object.keys(errors).length > 0 && (
      <StyledContainer className="error-message">
        <ul>
          {Object.keys(errors).map((fieldName) => (
            <li key={fieldName}>{errors[fieldName]}</li>
          ))}
        </ul>
      </StyledContainer>
    )
  );
};

ErrorsForm.propTypes = {
  errors: PropTypes.object.isRequired,
};
