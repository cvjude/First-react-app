import React from "react";
import TodoItem from "./TodoItem";
import todoData from "../models/todoData";
import style from "../styles/style.css";

const App = () => {
  const todoComponents = todoData.map(todoItem => (
    <TodoItem
      key={todoItem.id}
      todo={todoItem.text}
      checked={todoItem.completed}
    />
  ));

  return <div className="todo-list">{todoComponents}</div>;
};

export default App;
