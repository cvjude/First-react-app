import React, { Component } from "react";
import Form from "./Form.js";
import style from "../style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      Vegetarian: true,
      Kosher: true,
      LactoseFree: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? (checked ? checked : false) : value
    });
  }

  render() {
    return (
      <main>
        <Form {...this.state} handleChange={this.handleChange} />
      </main>
    );
  }
}

export default App;
