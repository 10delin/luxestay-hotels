import PropTypes from "prop-types";

import { Formik } from "formik";
import { FormikFields } from "../FormikFields/FormikFields";
import { ErrorsForm } from "../ErrorsForm/ErrorsForm";
import { useDispatch } from "react-redux";
import { setForm } from "../../redux/reducers/formSlice";
import { validateReservationForm } from "../../utils/validation";
import { useNavigateTo } from "../../hooks/useNavigateTo";

import { StyledFormikForm, StyledPrice, StyledTotal } from "./FormikFormStyles";
import { useTranslation } from "react-i18next";

export const FormikForm = ({ room }) => {
  const dispatch = useDispatch();
  const navigateTo = useNavigateTo();
  const { t } = useTranslation();

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
      validateOnMount
    >
      {({ errors, isValid }) => (
        <StyledFormikForm>
          <FormikFields />
          <StyledTotal>
            <p>{t("form.total")}</p>
            <StyledPrice>{`$${room.price}`}</StyledPrice>
          </StyledTotal>
          <ErrorsForm errors={errors} />
          <button
            disabled={!isValid}
            type="submit"
            data-cy="goToReservation-button"
          >
            {t("form.goToReservationButton")}
          </button>
        </StyledFormikForm>
      )}
    </Formik>
  );
};

FormikForm.propTypes = {
  room: PropTypes.object.isRequired,
};
