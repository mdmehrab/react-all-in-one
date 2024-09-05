import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HelloProvider } from "./context/HelloContext";

ReactDOM.render(
  <React.StrictMode>
    <HelloProvider>
      <App />
    </HelloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
