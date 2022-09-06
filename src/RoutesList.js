import {Route, Routes, Navigate} from 'react-router-dom';
import Homepage from './Homepage';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';

function RoutesList() {
  return (
    <Routes>
      <Route element= { <Homepage />} path="/" />
      <Route element= { <Companies />} path="/companies" />
      <Route element= { <Company />} path="/companies/:name" />
      <Route element= { <Jobs />} path="/jobs" />
      <Route element= { <Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RoutesList;