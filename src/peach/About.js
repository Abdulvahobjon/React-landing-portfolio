import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <br />
      <h1>About</h1>
      <li className="peach-link">
        <Link className="header-nav-link" to="/">
          Home
        </Link>
      </li>
    </div>
  );
}

export default About;
