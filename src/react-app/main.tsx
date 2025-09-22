import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { QueryProvider } from "./providers/QueryClientProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

import "./styles/globals.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryProvider>
  </React.StrictMode>,
);
