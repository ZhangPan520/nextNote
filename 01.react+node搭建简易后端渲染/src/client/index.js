import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../App";
hydrateRoot(document.querySelector("#root"), <App></App>);
