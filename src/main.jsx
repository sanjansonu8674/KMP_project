import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MapDataProvider } from "./hooks/useMapData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MapDataProvider>
      <App />
    </MapDataProvider>
  </React.StrictMode>
);
