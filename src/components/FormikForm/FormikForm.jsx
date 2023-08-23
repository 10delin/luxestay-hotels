import PropTypes from "prop-types";

import { Formik } from "formik";
import { ErrorsForm } from "../ErrorsForm/ErrorsForm";
import { FormikField } from "../FormikField/FormikField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setForm } from "../../redux/reducers/formSlice";
import { validateReservationForm } from "../../utils/validation";

import { StyledFormikForm, StyledPrice, StyledTotal } from "./FormikFormStyles";

export const FormikForm = ({ room }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(setForm(values));
    navigate("/reservation");
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
      {({ errors }) => (
        <StyledFormikForm>
          <FormikField
            name="name"
            type="text"
            label="Nombre"
            dataCy="name-input"
          />
          <FormikField
            name="surname"
            type="text"
            label="Apellidos"
            dataCy="surname-input"
          />
          <FormikField
            name="email"
            type="text"
            label="Email"
            dataCy="email-input"
          />
          <FormikField
            name="country"
            type="text"
            label="Pais"
            dataCy="country-input"
          />
          <FormikField
            name="terms"
            type="checkbox"
            label="Acepto terminos y condiciones"
            dataCy="terms-input"
          />

          <StyledTotal>
            <p>Total</p>
            <StyledPrice>{`$${room.price}`}</StyledPrice>
          </StyledTotal>
          <ErrorsForm errors={errors} />
          <button type="submit" data-cy="goToReservation-button">
            Reservar
          </button>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

FormikForm.propTypes = {
  room: PropTypes.object.isRequired,
};
