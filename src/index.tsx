import React from "react";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as Element);
const element = (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

root.render(element);
