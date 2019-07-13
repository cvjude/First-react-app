import React, { Component } from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import style from "../style.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MemeGenerator />
    </React.Fragment>
  );
};

export default App;
