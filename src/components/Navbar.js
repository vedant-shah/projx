import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/projx-logo1.png";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} style={{ height: "60px" }} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ border: "none" }}>
            <div
              className="offcanvas-header"
              style={{ backgroundColor: "#111315", color: "white" }}>
              <h1 className="offcanvas-title" id="offcanvasNavbarLabel">
                Welcome!
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div
              className="offcanvas-body"
              style={{ backgroundColor: "#111315", color: "white" }}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    My Projects
                  </Link>
                </li>
                <li className="nav-item my-2">
                  <Link className="nav-link" to="/signup">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
