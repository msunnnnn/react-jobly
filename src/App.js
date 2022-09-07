import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import Navigation from './common/Navigation';
import RoutesList from './common/RoutesList';

/** App component.
 *
 * App -> { Navigation, RoutesList }
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
