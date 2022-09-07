import { Route, Routes, Navigate } from 'react-router-dom';
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
 *                        LoginForm, SignupForm, ProfileForm }
 */
function RoutesList({login, signup}) {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<CompanyList />} path="/companies" />
      <Route element={<CompanyDetail />} path="/companies/:handle" />
      <Route element={<JobList />} path="/jobs" />
      <Route element={<LoginForm login={login}/>} path="/login" />
      <Route element={<SignupForm signup={signup}/>} path="/signup" />
      <Route element={<ProfileForm />} path="/profile" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;