import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/" className="Logo">
        <b> EDYODA</b>
      </a>

      <div className="navbar-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
