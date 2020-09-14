import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Scores</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <div>
              <h2>greeting</h2>
              <h2>score list here</h2>
            </div>
          </Route>
          <Route exact path="/game">
            <h3>put game here</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
