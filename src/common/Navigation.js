import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import userContext from "../userContext";


/** Navigation component.
 *
 * Events:
 * - links to Homepage, Companies, Jobs
 *
 * App -> Navigation -> { Homepage,
 *          (CompanyList, JobList, Profile, Logout) || (LoginForm, SignupForm) }
 */
function Navigation({ logout }) {

  const user = useContext(userContext);

  function navWhenLoggedIn() {
    return (
      <>
        <li className="nav-item mx-2">
          <NavLink to="/companies" className="nav-link">
            Companies
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/jobs" className="nav-link">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink to="/" className="nav-link" onClick={logout} >
            Log out {user.username}
          </NavLink>
        </li>
      </>
    );
  }

  function navWhenLoggedOut() {
    return (
      <>
        <li className="nav-item mx-2">
          <NavLink to="/login" className="nav-link">
            Log In
          </NavLink >
        </li >
        <li className="nav-item mx-2">
          <NavLink to="/signup" className="nav-link">
            Sign Up
          </NavLink>
        </li>
      </>
    );
  }

  const navLinks = user ? navWhenLoggedIn() : navWhenLoggedOut();

  return (
    <nav className="navbar navbar-light mb-5 nav">
      <NavLink to="/" className="navbar-brand mx-2">
        Jobly
      </NavLink>
      <ul className="navbar-nav flex-row">{navLinks}</ul>
    </nav>
  );

}

export default Navigation;
