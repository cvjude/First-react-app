import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoData from "../models/todoData";
import style from "../styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }

  render() {
    const { todos } = this.state;
    const todoComponents = todos.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        todo={todoItem.text}
        checked={todoItem.completed}
      />
    ));

    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;
