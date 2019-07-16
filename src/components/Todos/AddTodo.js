import React, { Component } from "react";
import PropType from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: 10, padding: "5px" }}
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Add Todos..."
        />
        <button className="btn" style={{ flex: 1 }}>
          Submit
        </button>
      </form>
    );
  }
}

AddTodo.PropType = {
  addTodo: PropType.func.isRequired
};

export default AddTodo;
