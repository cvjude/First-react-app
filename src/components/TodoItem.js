import React from "react";
import style from "../styles/style.css";

const TodoItem = props => {
  const { todo, checked } = props;
  return (
    <div className="todo-item">
      <input type="checkbox" checked={checked} />
      <p>{todo}</p>
    </div>
  );
};

export default TodoItem;
