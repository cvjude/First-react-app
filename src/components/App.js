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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const { todos } = this.state;
    const todoComponents = todos.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        todo={todoItem}
        handleChange={this.handleChange}
      />
    ));

    return <div className="todo-list">{todoComponents}</div>;
  }
}

export default App;
