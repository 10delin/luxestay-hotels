import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./redux/store.js";
import i18next from "./i18n";
import { I18nextProvider } from "react-i18next";

import { App } from "./components/App/App.jsx";
import { GlobalStyles } from "./styles/globalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
