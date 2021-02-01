import { Link } from "react-router-dom";
import React from "react";
import "../styles/components/Header.css";

export default function Header({ userName, isLoggedIn, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg light fixed-top">
      <div className="container">
        <Link to="/" className="navLink nav-link">
          Home
        </Link>
        <div className="collapse navbar-collapse">
          {isLoggedIn ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/logout"
                  onClick={onLogout}
                  className="navLink nav-link"
                >
                  Log Out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="navLink nav-link">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="navLink nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
