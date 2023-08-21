import { Form, Formik } from "formik";
import { ErrorsForm } from "../ErrorsForm/ErrorsForm";
import { FormikField } from "../FormikField/FormikField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setForm } from "../../redux/reducers/formSlice";
import { validateReservationForm } from "../../utils/validation";

export const FormikForm = () => {
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
        <Form>
          {Object.keys(initialValues).map((fieldName) => (
            <FormikField key={fieldName} name={fieldName} />
          ))}
          <button type="submit">Reservar</button>
          <ErrorsForm errors={errors} />
        </Form>
      )}
    </Formik>
  );
};
