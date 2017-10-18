import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
  return(
    <div className="nav">
          <Link to="/">Homies</Link>
          <Link to="/about">About Ughs</Link>
          <Link to="/contact">Con takt</Link>
          <Link to="/services">Servises</Link>
    </div>
  )
}

export default Navbar;
