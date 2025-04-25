import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodosIndex from "./TodosIndex";
import { todoProps } from "./helpers";

const TodosMain = (props: todoProps) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodosIndex {...props} />} />
      </Routes>
    </Router>
  );
};

export default TodosMain;