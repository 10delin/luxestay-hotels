import { FormikField } from "../FormikField/FormikField";

export const FormikFields = () => {
  return (
    <>
      <FormikField name="name" type="text" label="Nombre" dataCy="name-input" />
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
        type="select"
        label="Pais"
        dataCy="country-input"
      />
      <FormikField
        name="terms"
        type="checkbox"
        label="Acepto terminos y condiciones"
        dataCy="terms-input"
      />
    </>
  );
};
