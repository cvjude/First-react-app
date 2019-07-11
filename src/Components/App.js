import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  // componentDidMount() {
  //   fetch("https://swapi.co/api/people/1")
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    const response = await fetch("https://swapi.co/api/people/1");
    const data = await response.json();
    this.setState({
      character: data,
      loading: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.loading ? "Loading..." : this.state.character.name}</h2>
      </React.Fragment>
    );
  }
}

export default App;
