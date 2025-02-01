import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-4 text-primary ms-5" href="#">
            <img
              src="https://cdn-ijphb.nitrocdn.com/RHWoEaqpOxVKJjUNeLaispPPVzoVqNkU/assets/images/optimized/rev-57e2736/mayurahospitals.com/wp-content/uploads/2023/02/Mayura-logo-v2-02.png"
              style={{ height: "80px", width: "200px" }}
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto fw-bold">
              <li className="nav-item fs-5 px-4">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item fs-5 px-4">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item fs-5 px-4">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/doctors"
                >
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item fs-5 px-4">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
            </ul>
            <Link to="/" type="button" className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
