import React from "react";
import { useContext } from "react";
import userContext from "../userContext";
import { NavLink } from "react-router-dom";
import "./Homepage.css";

/** Homepage component. */
function Homepage() {

  const user = useContext(userContext);

  return (
    <div className="homepage text-white my-5">
      <h1>Jobly Homepage</h1>
      <p>All the jobs in one, convenient place.</p>
      {user
        ? <h3>Welcome Back, {user.firstName}!</h3>
        : (
          <>
            <button className="btn btn-primary mx-2">
              <NavLink to="/login" className="nav-link text-white">
                Log In
              </NavLink>
            </button>
            <button className="btn btn-primary mx-2">
              <NavLink to="/signup" className="nav-link text-white">
                Sign Up
              </NavLink>
            </button>
          </>)
      }
    </div>
  );

}

export default Homepage;