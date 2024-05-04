import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact";
import {
  GrHomeRounded,
  GrUserSettings,
  GrUbuntu,
  GrStorage,
} from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <li>
          <Link to={"/"}>
            <img src="img/Gun.png" alt="logo" height={40} />
          </Link>
        </li>
      </div>
      <div className="nav_menu">
        {/* <li>
          <Link to={"/"} className="nav_menu_links">
            HOME
          </Link>
        </li> */}
        <li>
          <Link to={"/contact"} className="nav_menu_links">
            CONTACT
          </Link>
        </li>
        <li>
          <Link to={"/signup"} className="nav_menu_links">
            SIGN UP
          </Link>
        </li>
        <li>
          <Link to={"/login"} className="nav_menu_links">
            LOG IN
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
