import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  position: relative;
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

export const StyledTotal = styled.div`
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

export const StyledPrice = styled.p`
  font-size: 2rem;
`;
