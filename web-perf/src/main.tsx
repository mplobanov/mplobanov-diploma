import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-wasm";
import "@tensorflow/tfjs-backend-webgpu";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
