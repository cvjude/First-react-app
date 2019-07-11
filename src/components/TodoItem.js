import React from "react";

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
