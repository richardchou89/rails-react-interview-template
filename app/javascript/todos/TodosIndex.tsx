import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { todoProps } from "./helpers";

const TodosIndex = ({ text }: todoProps) => {

  return (
    <div style={{ border: '1px solid red' }}>
      <h2>ToDos React Component ⚛️</h2>
      { text }
    </div>
  );
}

export default TodosIndex;