import React from "react";
import HeaderLogo from "../images/header-logo.svg";
import HeaderGroup from "../images/header-group.svg";
import HeaderGroupX from "../images/header-logo-x.svg";
import {  Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="container header-container">
          <div className="header-top">
            <div className="group">
                    <img src={HeaderGroup} alt="" />
            </div>
            <Link className="header-logo" to="/">
              <img src={HeaderLogo} alt="header logo" />
            </Link>
            <nav className="header-nav">
                
              <ul className="header-nav-list">
                <li className="header-nav-item">
                  <Link className="header-nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="header-nav-item">
                  <Link className="header-nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="header-nav-item">
                  <Link className="header-nav-link" to="/Skills">
                    Skills
                  </Link>
                </li>
                <li className="header-nav-item">
                  <Link className="header-nav-link" to="/Portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="header-nav-item">
                  <Link className="header-nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hero">
            <h2 className="hero-title">Hi, It’s Théophile Seyrig</h2>
            <p className="hero-text">Designer from Porto, Portugal</p>
            <Link to="/Portfolio" className="hero-link">
              Latest works
            </Link>
          </div>
        </div>
      </header>

      <div className="about">
        <div className="container">
          <h2 className="about-title">About</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero
            phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in
            rutrum augue. Pellentesque senectus risus consectetur et sed purus
            sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla
            egestas odio pharetra egestas aliquet mollis.
                <br /><br />
             Arcu, sed nisi, mi,
            arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet
            tellus, in rutrum augue. Pellentesque senectus risus consectetur et
            sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla
            nulla egestas odio pharetra egestas aliquet mollis. diam penatibus
            aliquet tellus, in rutrum augue. Pellentesque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
