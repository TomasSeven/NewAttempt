import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import DynamicMinMaxLayout from "./AppReSize";

const rootElement = document.getElementById("root");
ReactDOM.render(<DynamicMinMaxLayout />, rootElement);
