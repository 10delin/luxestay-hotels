import { Formik } from "formik";
import { ErrorsForm } from "../ErrorsForm/ErrorsForm";
import { FormikField } from "../FormikField/FormikField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setForm } from "../../redux/reducers/formSlice";
import { validateReservationForm } from "../../utils/validation";
import PropTypes from "prop-types";
import { StyledFormikForm, StyledPrice, StyledTotal } from "./FormikFormStyles";

export const FormikForm = ({ room }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(setForm(values));
    navigate("/");
  };
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        country: "",
        terms: false,
      }}
      validate={validateReservationForm}
      onSubmit={handleSubmit}
    >
      {({ errors, initialValues }) => (
        <StyledFormikForm>
          {Object.keys(initialValues).map((fieldName) => (
            <FormikField key={fieldName} name={fieldName} />
          ))}
          <StyledTotal>
            <p>Total</p>
            <StyledPrice>{`$${room.price}`}</StyledPrice>
          </StyledTotal>
          <ErrorsForm errors={errors} />
          <button type="submit">Reservar</button>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

FormikForm.propTypes = {
  room: PropTypes.object.isRequired,
};
