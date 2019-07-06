import React from "react";
import TodoItem from "./TodoItem";
import style from "../styles/style.css";

const App = () => {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default App;
