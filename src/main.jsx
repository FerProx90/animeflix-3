import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./context/context";
import SerieContextProvider from "./context/serieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <SerieContextProvider>
        <App />
      </SerieContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
