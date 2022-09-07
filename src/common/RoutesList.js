import {Route, Routes, Navigate} from 'react-router-dom';
import Homepage from '../common/Homepage';
import CompanyList from '../company/CompanyList';
import CompanyDetail from '../company/CompanyDetail';
import Jobs from '../job/Jobs';

function RoutesList() {
  return (
    <Routes>
      <Route element= { <Homepage />} path="/" />
      <Route element= { <CompanyList />} path="/companies" />
      <Route element= { <CompanyDetail />} path="/companies/:name" />
      <Route element= { <Jobs />} path="/jobs" />
      <Route element= { <Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;