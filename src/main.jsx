import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import App from "./App.jsx";

// Disable browser scroll restoration BEFORE React initializes
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
