import React, { Component } from "react";
import Time from "./time";

class App extends Component {
  constructor() {
    super();
    this.state = {
      update: false
    };
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime() {
    this.setState(prevState => {
      return { update: !prevState.update };
    });
  }

  componentDidMount() {
    this.setState(prevState => {
      return { update: !prevState.update };
    });
    console.log("Mounted Once", this.state);
  }

  render() {
    return (
      <div>
        <Time date={new Date()} handleTime={this.handleTime} self={this} />
      </div>
    );
  }
}

export default App;
