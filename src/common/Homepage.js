import React from "react";
import { useContext } from "react";
import userContext from "../userContext";
import { NavLink } from "react-router-dom";

/** Homepage component. */
function Homepage() {

  const user = useContext(userContext);

  return (
    <>
      <h1>Jobly Homepage</h1>
      <p>All the jobs in one, convenient place.</p>
      {user
        ?<h3>Welcome Back, {user.firstName}!</h3>
        : (
          <>
            <NavLink to="/login" className="nav-link">
              Log In
            </NavLink>

            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </>)
      }
    </>
  );

}

export default Homepage;