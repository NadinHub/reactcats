import React from "react";
// import {Link} from 'react-dom'
import { Link } from "react-router-dom";

import "./header.css";

const Header = (props) => (
  <div className="row">
    {/* <div className="col"> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          {/* <div className="m-2"> */}
          <img src="../img/logo-nfc.png"
            alt="logo"
            // width="30" 
            height="50"
            className="d-inline-block align-top" />
          {/* </div> */}
          {/* <span className="p-2">Kitten Club</span> */}
        </a>
        {/* </div> */}
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/mypage">
                My page
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            {/* </ul> */}
            {/* <div className="d-flex"> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown link
                </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* </div> */}
  </div>
);

export default Header;
