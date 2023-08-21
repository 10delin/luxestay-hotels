import PropTypes from "prop-types";

export const ErrorsForm = ({ errors }) => {
  return (
    Object.keys(errors).length > 0 && (
      <div className="error-message">
        Please fix the following errors:
        <ul>
          {Object.keys(errors).map((fieldName) => (
            <li key={fieldName}>{errors[fieldName]}</li>
          ))}
        </ul>
      </div>
    )
  );
};

ErrorsForm.propTypes = {
  errors: PropTypes.object.isRequired,
};
