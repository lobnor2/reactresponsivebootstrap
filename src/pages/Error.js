import React from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 style={{ color: "red", textAlign: "center", paddingTop: "18rem" }}>
          404 Page Not Found...
        </h1>
        <Link to="/">
          <button className="btn btn-style" style={{ marginLeft: "38rem" }}>
            Go back to Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Error;
