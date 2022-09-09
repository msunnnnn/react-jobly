import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext, useState } from "react";
import userContext from "../userContext";

import Homepage from '../common/Homepage';
import CompanyList from '../company/CompanyList';
import CompanyDetail from '../company/CompanyDetail';
import JobList from '../job/JobList';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import ProfileForm from '../auth/ProfileForm';
import Loading from './Loading';

/** RoutesList component.
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList,
 *                        LoginForm, SignupForm, ProfileForm, Logout }
 */
function RoutesList({ login, signup, update, logout }) {
  const user = useContext(userContext);

  function navLinksWhenLoggedOut() {
    return (
      <>
        <Route element={<LoginForm login={login} />} path="/login" />
        <Route element={<SignupForm signup={signup} />} path="/signup" />
      </>
    );
  }

  function navLinksWhenLoggedIn() {
    return (
      <>
          <Route element={<CompanyList />} path="/companies" />
          <Route element={<CompanyDetail />} path="/companies/:handle" />
          <Route element={<JobList />} path="/jobs" />
          <Route element={<ProfileForm update={update} />} path="/profile" />
      </>
    );
  }

  const navLinks = user ? navLinksWhenLoggedIn() : navLinksWhenLoggedOut();

  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      {navLinks}
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;