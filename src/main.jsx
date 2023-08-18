import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App.jsx";
import { GlobalStyles } from "./styles/globalStyles.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
