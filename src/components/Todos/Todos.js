import React from "react";
import TodoItem from "./TodoItem";
import PropType from "prop-types";

function Todos(props) {
  const { todos, markComplete, delTodo } = props;
  return todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={markComplete}
        delTodo={delTodo}
      />
    );
  });
}

Todos.PropType = {
  todos: PropType.array.isRequired,
  markComplete: PropType.func.isRequired,
  delTodo: PropType.func.isRequired
};

export default Todos;
