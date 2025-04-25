import React from "react";
import ReactDOM from "react-dom/client"
import TodosMain from "../todos/TodosMain";

type Components = Record<string, React.ElementType>;

const components: Components = {
  "TodosMain": TodosMain,
};

document.addEventListener('DOMContentLoaded', () => {
  Object.keys(components).forEach((key) => {
    const nodes = Array.from(
      document.getElementsByClassName(`react-${key}`)
    );

    nodes.forEach((node) => {
      const data = node.getAttribute("data");
      const props = data && data.length > 2 ? JSON.parse(data) : {};

      const Component = components[key];
      const root = ReactDOM.createRoot(node);
      root.render(<Component {...props} />);
    });
  });
})
