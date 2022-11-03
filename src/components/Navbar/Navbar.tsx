import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css"

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li className="nav-items">
          <i className="gg-circleci"></i>
          </li>
          <li className="nav-items" >
          <Link to="/" style = {{cursor:"pointer",textDecoration:"none",color:"black"}}>
            Home
            </Link>
          </li>
          <li className="nav-items">
          <Link to="/" style = {{cursor:"pointer",textDecoration:"none",color:"black"}}>
            Shop
            </Link>
          </li>
          <li className="nav-items">
          <Link to="/" style = {{cursor:"pointer",textDecoration:"none",color:"black"}}>
            Brand
            </Link>
          </li>
          <li className="nav-items">
          <Link to="/" style = {{cursor:"pointer",textDecoration:"none",color:"black"}}>
            Men
            </Link>
          </li>
          <li className="nav-items">
          <Link to="/" style = {{cursor:"pointer",textDecoration:"none",color:"black"}}>
            Women
            </Link>
          </li>
          <li className="nav-items">
          <Link to="/" style = {{cursor:"pointer",textDecoration:"none",color:"black"}}>
            Kids
            </Link>
          </li>
          <li className="nav-items">
          <i className="gg-shopping-cart"></i>
          </li>
          <li className="nav-items">
          <i className="gg-heart"></i>
          </li>
          <li className="nav-items">
          <i className="gg-gift"></i>
          </li>
          <li className="nav-items">
          <i className="gg-boy"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
