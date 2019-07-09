import React from "react";

const Joke = props => {
  const { question, punchLine } = props;
  const style = {
    // display: question ? "block" : "none"
    display: !question && "none"
  };
  return (
    <div>
      <h3 style={style}>Question: {question}</h3>
      <h3>punchLine: {punchLine}</h3>
    </div>
  );
};

export default Joke;
