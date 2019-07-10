import React from "react";

function App() {
  return (
    <div>
      <img src="https://www.fillmurray.com/200/100" />
      <br />
      <br />
      <button
        onClick={() => {
          console.log("I was clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
