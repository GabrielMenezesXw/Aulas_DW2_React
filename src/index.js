import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./1.7.2/Personagens";
//import App from "./1.7.1/Filmes;"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App familia="Redfield" />
  </StrictMode>
);
