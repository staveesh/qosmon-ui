import { Link } from "react-router-dom";
import React from "react";
import "../styles/components/Header.css";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg light fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            {props.links.map((link, idx) => {
              if (link.to === "/logout") {
                window.localStorage.removeItem("user");
              }
              return (
                <li key={idx} className="nav-item">
                  <Link to={link.to} className="navLink nav-link">
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
