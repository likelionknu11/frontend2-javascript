import "../CSS/Header.css";
import "../CSS/Button.css";
import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div>
      <div className="header">
        <h1>LikeLion</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Studies</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <Button></Button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
