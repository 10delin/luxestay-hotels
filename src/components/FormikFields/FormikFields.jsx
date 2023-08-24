import { useTranslation } from "react-i18next";
import { FormikField } from "../FormikField/FormikField";

export const FormikFields = () => {
  const { t } = useTranslation();
  return (
    <>
      <FormikField
        name="name"
        type="text"
        label={t("form.name")}
        dataCy="name-input"
      />
      <FormikField
        name="surname"
        type="text"
        label={t("form.surname")}
        dataCy="surname-input"
      />
      <FormikField
        name="email"
        type="text"
        label={t("form.email")}
        dataCy="email-input"
      />
      <FormikField
        name="country"
        type="select"
        label={t("form.country")}
        dataCy="country-input"
      />
      <FormikField
        name="terms"
        type="checkbox"
        label={t("form.terms")}
        dataCy="terms-input"
      />
    </>
  );
};
