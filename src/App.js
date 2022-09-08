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
 * State:
 * - user
 *
 * Context:
 * - user
 *
 * App -> { Navigation, RoutesList }
 */
function App() {

  const [user, setUser] = useState(null);

  /** Decodes token and gets user info from API. Updates user state with info. */
  async function updateUserState(token) {
    const payload = jwt_decode(token);
    JoblyApi.token = token;
    const response = await JoblyApi.request(`users/${payload.username}`);
    setUser(response.user);
  }

  /** Gets token from API with login data, then updates user state.*/
  async function login(data) {
    const response = await JoblyApi.request("auth/token", data, "post");
    const token = response.token;
    updateUserState(token);
  }

  /** Gets token from API with signup data, then updates user state.*/
  async function signup(data) {
    const response = await JoblyApi.request("auth/register", data, "post");
    const token = response.token;
    updateUserState(token);
  }

  /** Makes API request to update user info, then updates user state. */
  async function updateProfile(data) {
    const response =
      await JoblyApi.request(`users/${user.username}`, data, "patch");
    setUser(response.user);
  }

  /** Removes token from JoblyApi and updates user state to null. */
  function logout() {
    JoblyApi.token = '';
    setUser(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RoutesList
            login={login}
            signup={signup}
            update={updateProfile}
            logout={logout}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
