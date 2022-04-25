import React from "react";
import{   Link  } from "react-router-dom";
const NavBar= () => {
    return (
      <div className="NavBar">
        <li>
            <Link  className="App-link" to="/">Home</Link>
        </li>
        <li>
            <Link className="App-link" to="/Contact">Contact Me</Link>
        </li>
        <li>
            <Link className="App-link" to="/Projects">Projects</Link>
        </li>
        <li>
            <Link className="App-link" to="/Donate">Donate To Me</Link>
        </li>
        <li>
            <Link className="App-link" to="/Blog">Blog</Link>
        </li>
      </div>
    );
  }

  export default NavBar;