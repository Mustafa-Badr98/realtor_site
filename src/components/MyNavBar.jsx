import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MyNavbar = () => {
  return (
    <>
      <div className="container ">
        <nav
          id="nav"
          className="navbar navbar-expand-lg bg-body p-0"
        >
          <a className="navbar-brand text-dark ms-4 mt-2" href="#home">
            <h2>RealtorSite</h2>
          </a>

          <button
            className="navbar-toggler ms-auto me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark fs-6  me-2" href="#home">
                  Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs-6  me-2" href="#about">
                  Sell
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-dark fs-6  me-2" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="float-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="text-light fs-6 me-2 btn btn-dark"
                    style={{borderRadius:"20px"}}
                  >
                    LogIn
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fs-6  me-2" to="/">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-end me-5">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook text-dark pe-2"></i>
            </a>
            <a href="https://twitter.com/?lang=en">
              <i className="fab fa-twitter text-dark pe-2"></i>
            </a>
            <a href="https://www.linkedin.com/in/mustafa-badr-iti/">
              <i className="fab fa-linkedin text-dark"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MyNavbar;
