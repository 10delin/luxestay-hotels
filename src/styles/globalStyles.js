import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light;
    color: #081f2c;
    background-color: #ffffff;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    display: block;
    place-content: center;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0.5em 1.2em;
    font-size: 15px;
    font-weight: 400;
    font-family: inherit;
    background-color: #007A78;
    color: #ffffff;
    cursor: pointer;
    text-transform: uppercase;
    transition: border-color 0.25s;
  }
  button:hover {
    background-color: #005260;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;
