import React from "react";
import style from "../styles/style.css";

const TodoItem = props => {
  const { todo, handleChange } = props;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <p>{todo.text}</p>
    </div>
  );
};

export default TodoItem;
