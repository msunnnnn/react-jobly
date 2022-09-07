import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from '../common/Homepage';
import CompanyList from '../company/CompanyList';
import CompanyDetail from '../company/CompanyDetail';
import JobList from '../job/JobList';

/** RoutesList component.
 *
 * Events:
 * - routes to Homepage, CompanyList, CompanyDetail, JobList
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList }
 */
function RoutesList() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<CompanyList />} path="/companies" />
      <Route element={<CompanyDetail />} path="/companies/:handle" />
      <Route element={<JobList />} path="/jobs" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;