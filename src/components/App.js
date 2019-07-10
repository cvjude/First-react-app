import React from "react";
import style from "../styles/style.css";

class App extends React.Component {
  constructor() {
    super(); //so our class has all the things in the global object
    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default App;
