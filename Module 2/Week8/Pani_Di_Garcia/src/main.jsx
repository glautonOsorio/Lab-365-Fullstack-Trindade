import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BannerProvider } from "./contexts/BannerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BannerProvider>
      <App />
    </BannerProvider>
  </React.StrictMode>
);
