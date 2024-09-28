import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { HandleCoinsContextProvider } from "./context/handleModalDataContext";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HandleCoinsContextProvider>
      <App />
    </HandleCoinsContextProvider>
  </React.StrictMode>
);
