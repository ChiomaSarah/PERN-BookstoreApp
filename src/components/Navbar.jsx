import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <Link to="/">
        <h3 className="text-dark navbar-brand">BOOK STORE</h3>
      </Link>

      <button
        className="navbar-toggler bg-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a href="/" className="nav-link" id="list">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link" id="list">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-book" className="nav-link" id="list">
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
