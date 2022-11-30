import React from "react";
import {  Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container">
        <br />
      <h1>Contact</h1>
      <li className="peach-link">
        <Link className="header-nav-link" to="/">
          Home
        </Link>
      </li>
    </div>
  );
}

export default Contact;
