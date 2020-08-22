import React from "react";
import { Link } from "react-router-dom";
// import "./nav.css"

export default function navBar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/create-post">Create A Post</Link>
      </li>
      <li>
        <Link to="/show">Show Current Post</Link>
      </li>
    </ul>
  );
}
