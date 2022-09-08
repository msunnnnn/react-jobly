import logo from './logo.svg';
import { BrowserRouter, Navigate } from "react-router-dom";
import userContext from './userContext';
import { useEffect, useState } from 'react';
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
  const [userToken, setUserToken] = useState("");

  useEffect(function getUserInfo() {
    async function getUserFromAPI() {
      const payload = jwt_decode(userToken);
      const response = await JoblyApi.request(`users/${payload.username}`);
      setUser(response.user);
    }
    if(userToken !== ""){
      JoblyApi.token = userToken
      // localStorage.setItem("token", userToken)
      getUserFromAPI()
    }
    // }else if(localStorage.getItem("token")){
    //   setUserToken(localStorage.getItem("token"))
    //   getUserFromAPI()
    // }
  },[userToken]);

  /** Gets token from API with login data, then updates user state.*/
  async function login(data) {
    const response = await JoblyApi.request("auth/token", data, "post");
    const token = response.token;
    setUserToken(token);
  }

  /** Gets token from API with signup data, then updates user state.*/
  async function signup(data) {
    const response = await JoblyApi.request("auth/register", data, "post");
    const token = response.token;
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
            logout={logout} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
