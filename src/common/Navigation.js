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
function Navigation() {

  const user = useContext(userContext);

  const navLinks = user
    ? (
      <>
        <li className="nav-item">
          <NavLink to="/companies" className="nav-link">
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/jobs" className="nav-link">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/logout" className="nav-link">
            Log out {user.username}
          </NavLink>
        </li>
      </>
    )
    : (
      <>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Log In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            Sign Up
          </NavLink>
        </li>
      </>
    );

  return (
    <nav className="navbar bg-light">
      <NavLink to="/" className="navbar-brand">
        Jobly
      </NavLink>
      <ul className="navbar-nav">{navLinks}</ul>
    </nav>
  );

}

export default Navigation;
