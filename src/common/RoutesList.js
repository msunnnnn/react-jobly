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

/** RoutesList component.
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList,
 *                        LoginForm, SignupForm, ProfileForm, Logout }
 */
function RoutesList({ login, signup, update, logout }) {
  const user = useContext(userContext);
  const [isLoading, setIsLoading] =useState(true)

  console.log("route's list rendered")

  function toggleLoading(){
    if (isLoading === true){
      return (
        <>
          <Route element={<LoginForm login={login} />} path="/login" />
          <Route element={<SignupForm signup={signup} />} path="/signup" />
        </>
        )
    }
    setIsLoading(false)
  }

  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      
      {!user && toggleLoading()}

      {user && (
        <>
          <Route element={<CompanyList />} path="/companies" />
          <Route element={<CompanyDetail />} path="/companies/:handle" />
          <Route element={<JobList />} path="/jobs" />
          <Route element={<ProfileForm update={update} />} path="/profile" />
        </>)
      }

      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;