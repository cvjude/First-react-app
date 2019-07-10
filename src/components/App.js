import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    console.log(this.state.isLoggedIn);
    const isLog = this.state.isLoggedIn
      ? ["Logout", "Logged out"]
      : ["Login", "Logged In"];
    return (
      <div>
        <h2>{isLog[1]}</h2>
        <button onClick={this.handleClick}>{isLog[0]}</button>
      </div>
    );
  }
}

export default App;
