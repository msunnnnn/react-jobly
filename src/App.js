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

  function updateUser(newUser) {
    setUser(newUser);
  }

  async function login(data) {
    const response = await JoblyApi.request("auth/token", data, "post");
    const token = response.token;
    const payload = jwt_decode(token);
    console.log(payload)
    setUser(payload);
    <Navigate to="/homepage" />
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RoutesList login={login}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
