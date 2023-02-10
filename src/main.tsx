import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StepProvider } from "./context/taskStepContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </React.StrictMode>
);
