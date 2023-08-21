import { Field } from "formik";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormikField = styled.div`
  position: relative;
  display: flex;
  padding: 15px 0;
  width: 100%;
  background: #ededed;
  border-bottom: 1px solid black;

  ${({ $name }) =>
    $name === "terms" &&
    `
    background: #ffffff;
    border-bottom: none;
    color: #212121;
    gap: 0.5rem;
  `}

  label {
    position: absolute;
    top: 5px;
    left: 15px;
    display: block;
    transition: 0.2s ease all;
    font-size: 1rem;
    color: #9b9b9b;

    ${({ $name }) =>
      $name === "terms" &&
      `
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      top:0;
      left:0;

    color: #212121;
  `}
  }

  input {
    position: relative;
    width: 95%;
    padding-left: 15px;
    font-family: inherit;
    border: 0;
    outline: 0;
    font-size: 16px;
    font-weight: 600;
    padding-top: 15px;
    background: #ededed;
    color: #212121;

    ${({ $name }) =>
      $name === "terms" &&
      `
      position: flex;
      width: initial;

      
    color: #212121;
  `}
  }
`;

export const FormikField = ({ name }) => {
  const types = (name) => {
    switch (name) {
      case "name":
        return "text";
      case "surname":
        return "text";
      case "email":
        return "email";
      case "country":
        return "text";
      case "terms":
        return "checkbox";
      default:
        return "text";
    }
  };

  return (
    <StyledFormikField $name={name}>
      <Field $name={name} id={name} name={name} type={types(name)} />
      <label htmlFor={name}>
        {name === "terms" ? "Acepto terminos y condiciones" : name}
      </label>
    </StyledFormikField>
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
};
