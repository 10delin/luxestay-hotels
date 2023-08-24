import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 16px;

  button {
    border: none;
    width: 100%;
    padding: 16px 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const StyledTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  gap: 8px;
  margin: 20px 0;

  p {
    margin: 0;
    font-weight: 600;
  }
`;

export const StyledPrice = styled.p`
  font-size: 32px;
`;
