import React, { Component } from "react";
import style from "../style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: ""
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
      <form>
        <input
          name="firstName"
          value={this.state.firstName}
          type="text"
          placeholder="FirstName"
          onChange={this.handleChange}
        />
        <input
          name="lastName"
          value={this.state.lastName}
          type="text"
          placeholder="LastName"
          onChange={this.handleChange}
        />
        <input
          name="isFriendly"
          id="isFriendly"
          type="checkbox"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />
        <label htmlFor="isFriendly">click</label>
        <label>
          <input
            name="gender"
            type="radio"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            name="gender"
            type="radio"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor "
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default App;
