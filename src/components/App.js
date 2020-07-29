import React from 'react';
import '../style/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <hr/>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>  
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
          </Switch>
        </nav>
      </Router>
     
    </div>
  );
}

export default App;
