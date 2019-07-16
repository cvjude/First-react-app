import React, { Component } from "react";
import PropType from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { todo, markComplete, delTodo } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={markComplete.bind(this, todo.id)}
            checked={todo.completed}
          />
          {todo.title}
          <button onClick={delTodo.bind(this, todo.id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "grey",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  outline: "none"
};

TodoItem.PropType = {
  todos: PropType.array.isRequired,
  markComplete: PropType.func.isRequired,
  delTodo: PropType.func.isRequired
};

export default TodoItem;
