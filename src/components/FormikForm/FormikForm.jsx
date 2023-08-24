import PropTypes from "prop-types";

import { Formik } from "formik";
import { FormikFields } from "../FormikFields/FormikFields";
import { ErrorsForm } from "../ErrorsForm/ErrorsForm";
import { useDispatch } from "react-redux";
import { setForm } from "../../redux/reducers/formSlice";
import { validateReservationForm } from "../../utils/validation";
import { useNavigateTo } from "../../hooks/useNavigateTo";

import { StyledFormikForm, StyledPrice, StyledTotal } from "./FormikFormStyles";

export const FormikForm = ({ room }) => {
  const dispatch = useDispatch();
  const navigateTo = useNavigateTo();

  const handleSubmit = (values) => {
    dispatch(setForm(values));
    navigateTo("/reservation");
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
          <FormikFields />
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
