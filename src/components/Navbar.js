import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/projx-logo1.png";
import { Button } from "@mui/material";

export const Navbar = () => {
  // const getAvatar = async () => {
  //   const imageUrl = "https://avatars.dicebear.com/api/avataaars/ved.svg";
  //   const img = async () => {
  //     const response = await fetch(imageUrl);
  //     const imageBlob = await response.blob();
  //     const reader = new FileReader();
  //     reader.readAsDataURL(imageBlob);
  //     reader.onloadend = () => {
  //       const base64data = reader.result;
  //       console.log(base64data);
  //     };
  //   };
  // };
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div
            className="collapse text-center my-2 navbar-collapse"
            id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img src={logo} height="60" alt="ProjX" loading="lazy" />
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  My Projects
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            {/* <!-- Avatar --> */}
            {/* toDO: Check local storage and give either buttons or avatar */}
            <div className="logo d-flex" style={{ marginRight: "1.5%" }}>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button
                  className="mx-2"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "rgb(101 158 255)",
                  }}
                  variant="contained">
                  signin
                </Button>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button
                  className="mx-2"
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "rgb(101 158 255)",
                  }}
                  variant="contained">
                  Signup
                </Button>
              </Link>
            </div>
            <div className="dropdown mx-4">
              <a
                className="dropdown-toggle d-inline-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <img
                  src="https://avatars.dicebear.com/api/avataaars/temp.svg"
                  // ! change api url from local storage
                  className="rounded-circle"
                  height="50"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
};
