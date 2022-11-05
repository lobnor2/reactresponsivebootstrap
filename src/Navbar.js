import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              LobNorPay
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}
              //   id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  {/* <a className="nav-link " aria-current="page" href="#">
                    Home
                  </a> */}
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                  {/* <a className="nav-link" href="#">
                    Services
                  </a> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">
                    About
                  </a> */}
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">
                    Contact
                  </a> */}
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link to="/login">
                <button className=" mx-2 btn-style " type="submit">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className=" btn-style" type="submit">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
