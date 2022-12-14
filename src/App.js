import logo from './logo.svg';
import { BrowserRouter, Navigate } from "react-router-dom";
import userContext from './userContext';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import './App.css';
import Navigation from './common/Navigation';
import RoutesList from './common/RoutesList';
import JoblyApi from './api';
import Loading from './common/Loading';

const TOKEN_KEY = "token";


/** App component.
 *
 * State:
 * - user
 * - user token
 * - isLoading
 *
 * Context:
 * - user
 *
 * App -> { Navigation, RoutesList }
 */
function App() {

  const [user, setUser] = useState(null);
  const [userToken, setUserToken] =
    useState(localStorage.getItem(TOKEN_KEY) || null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getUserInfo() {
    async function getUserFromAPI() {
      if (userToken) {
        JoblyApi.token = userToken;
        const payload = jwt_decode(userToken);
        const response = await JoblyApi.request(`users/${payload.username}`);
        setUser(response.user);
      }
      setIsLoading(false);
    }

    getUserFromAPI();

  }, [userToken]);

  /** Gets token from API with login data, then updates user state.*/
  async function login(data) {
    const response = await JoblyApi.request("auth/token", data, "post");
    const token = response.token;
    localStorage.setItem(TOKEN_KEY, token);
    setUserToken(token);
  }

  /** Gets token from API with signup data, then updates user state.*/
  async function signup(data) {
    const response = await JoblyApi.request("auth/register", data, "post");
    const token = response.token;
    localStorage.setItem(TOKEN_KEY, token);
    setUserToken(token);

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
    localStorage.removeItem(TOKEN_KEY);
    setUserToken(null);
    setUser(null);
  }

  if (isLoading) {
    return (
      <div className='App'>
        <Loading />
      </div>
    );
  };

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation
            logout={logout} />
          <RoutesList
            login={login}
            signup={signup}
            update={updateProfile} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
