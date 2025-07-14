import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HttpsCom } from "./screens/HttpsCom";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HttpsCom />
  </StrictMode>,
);
