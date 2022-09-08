import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from '../common/Homepage';
import CompanyList from '../company/CompanyList';
import CompanyDetail from '../company/CompanyDetail';
import JobList from '../job/JobList';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import ProfileForm from '../auth/ProfileForm';
import Logout from '../auth/Logout';

/** RoutesList component.
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList,
 *                        LoginForm, SignupForm, ProfileForm, Logout }
 */
function RoutesList({login, signup, update, logout}) {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<CompanyList />} path="/companies" />
      <Route element={<CompanyDetail />} path="/companies/:handle" />
      <Route element={<JobList />} path="/jobs" />
      <Route element={<LoginForm login={login}/>} path="/login" />
      <Route element={<SignupForm signup={signup}/>} path="/signup" />
      <Route element={<ProfileForm update={update}/>} path="/profile" />
      <Route element={<Logout logout={logout} />} path="/logout" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;