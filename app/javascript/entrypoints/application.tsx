import React from "react";
import ReactDOM from "react-dom/client"
import App from "../todos/App";

const node = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(node);
root.render(<App />);