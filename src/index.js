import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return (
    <div>
      Hello React!
      <ul>
        <li>I'm learning react</li>
        <li>Although I don't fully umnderstand react</li>
      </ul>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
