import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      memesImgs: []
    };
  }

  componentDidMount = async () => {
    let fetchDta = await fetch("https://api.imgflip.com/get_memes");
    fetchDta = await fetchDta.json();
    const { memes } = fetchDta.data;
    this.setState({ memesImgs: memes });
  };

  handleChandle = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const rand = Math.floor(Math.random() * this.state.memesImgs.length);
    const randMeme = this.state.memesImgs[rand].url;
    this.setState({ randomImage: randMeme });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top text"
            value={this.state.topText}
            onChange={this.handleChandle}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.bottomText}
            onChange={this.handleChandle}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
