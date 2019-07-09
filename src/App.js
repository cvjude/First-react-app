import React from "react";
import Joke from "./joke";
import jokeData from "./Model/jokeData";

const App = () => {
  const jokeComponent = jokeData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));
  return <div>{jokeComponent}</div>;
};

export default App;
