import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

/** Navigation component.
 *
 * Events:
 * - links to Homepage, Companies, Jobs
 *
 * App -> Navigation -> { Homepage, CompanyList, JobList }
 */
function Navigation() {
  return (
    <nav className="navbar bg-light">
      <NavLink to="/" className="navbar-brand">
        Jobly
      </NavLink>
      <ul className="navbar-nav">
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
      </ul>
    </nav>
  );
}

export default Navigation;
