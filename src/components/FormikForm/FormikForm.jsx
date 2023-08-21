import { Form, Formik } from "formik";
import { ErrorsForm } from "../ErrorsForm/ErrorsForm";
import { FormikField } from "../FormikField/FormikField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setForm } from "../../redux/reducers/formSlice";
import { validateReservationForm } from "../../utils/validation";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 1rem;

  button {
    border: none;
    padding: 1rem 0.5rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin: 20px 0;

  p {
    margin: 0;
    font-weight: 600;
  }
`;

const StyledPrice = styled.p`
  font-size: 2rem;
`;

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
          <button type="submit">Reservar</button>
          <ErrorsForm errors={errors} />
        </StyledFormikForm>
      )}
    </Formik>
  );
};

FormikForm.propTypes = {
  room: PropTypes.object.isRequired,
};
