import styled from "styled-components";

export const StyledFormikField = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid black;
  background: #ededed;

  ${({ $name }) =>
    $name === "terms" &&
    `
    gap: 8px;
    border-bottom: none;
    background: #ffffff;
    color: #212121;
  `}

  label {
    position: absolute;
    display: block;
    top: 5px;
    left: 15px;
    font-size: 16px;
    color: #9b9b9b;
    transition: 0.2s ease all;

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
      cursor: pointer;
      color: #212121;
  `}
  }

  input {
    position: relative;
    width: 95%;
    padding-left: 15px;
    padding-top: 15px;
    border: 0;
    outline: 0;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
    background: #ededed;
    color: #212121;

    ${({ $name }) =>
      $name === "terms" &&
      `
      position: flex;
      width: initial;
      cursor: pointer;
      color: #212121;
  `}
  }

  select {
    position: relative;
    width: 98%;
    padding-left: 15px;
    padding-top: 15px;
    border: 0;
    outline: 0;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
    background: #ededed;
    color: #212121;
    cursor: pointer;

    ${({ $name }) =>
      $name === "terms" &&
      `
      position: flex;
      width: initial;
      color: #212121;
  `}
  }
`;
