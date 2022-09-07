import logo from './logo.svg';
import { BrowserRouter, Navigate } from "react-router-dom";
import userContext from './userContext';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';

import './App.css';
import Navigation from './common/Navigation';
import RoutesList from './common/RoutesList';
import JoblyApi from './api';

/** App component.
 *
 * App -> { Navigation, RoutesList }
 */
function App() {

  const [user, setUser] = useState(null);



  async function updateUserState(token) {
    const payload = jwt_decode(token);
    JoblyApi.token = token;
    const response = await JoblyApi.request(`users/${payload.username}`);
    setUser(response.user);
  }
  async function login(data) {
    const response = await JoblyApi.request("auth/token", data, "post");
    const token = response.token;
    updateUserState(token);
    <Navigate to="/homepage" />
  }

  async function signup(data) {
    const response = await JoblyApi.request("auth/register", data, "post");
    const token = response.token;
    updateUserState(token);
    <Navigate to="/homepage" />
  }

  async function updateProfile(data) {
    const response =
      await JoblyApi.request(`users/${user.username}`, data, "patch");
    setUser(response.user);
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RoutesList login={login} signup={signup} update={updateProfile} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
