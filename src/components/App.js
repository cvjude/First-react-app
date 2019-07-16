import React, { Component } from "react";
// import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./Todos/Todos";
import AddTodo from "./Todos/AddTodo";
import "../styles/App.css";
import Header from "./Layout/Header";
import About from "./pages/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    this.setState({ todos: response.data });
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  delTodo = async id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  addTodo = async title => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    });
    this.setState({ todos: [...this.state.todos, res.data] });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todo
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
