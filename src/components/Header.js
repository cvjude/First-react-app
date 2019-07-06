import React from "react";
import styles from "../styles/style.css";

const Header = () => {
  const style = {
    color: "red",
    fontSize: "20px"
  };

  style.fontWeight = 700;
  return (
    <nav>
      <div>React App</div>
      <ul className="navlist">
        <li style={style}>Home</li>
        <li>Login</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
};

export default Header;
