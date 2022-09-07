import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import userContext from './userContext';
import { useState } from 'react';

import './App.css';
import Navigation from './common/Navigation';
import RoutesList from './common/RoutesList';

/** App component.
 *
 * App -> { Navigation, RoutesList }
 */
function App() {

  const [user, setUser] = useState(null);

  function updateUser(newUser) {
    setUser(newUser);
  }

  function login() {
    
  }

  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Navigation />
          <RoutesList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
