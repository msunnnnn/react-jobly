import React from "react";
import { useContext } from "react";
import userContext from "../userContext";
import { NavLink } from "react-router-dom";
import "./Homepage.css";

/** Homepage component. */
function Homepage() {

  const user = useContext(userContext);

  return (
    <div className="homepage my-5 pt-5">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {user
        ? <h3>Welcome Back, {user.firstName}!</h3>
        : (
          <>
            <span>
              <NavLink
              to="/login"
              className="text-white btn btn-info text-white mx-2">
              Log In
            </NavLink>
            </span>
            <span>
            <NavLink
              to="/signup"
              className="text-white btn btn-info text-white mx-2">
              Sign Up
            </NavLink>
            </span>
          </>)
      }
    </div>
  );

}

export default Homepage;