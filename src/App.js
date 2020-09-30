import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HiScores from './hiScores';
import PlayGame from './playGame';
import ScoreDebugger from './scoreDebugger'
import './App.css';

export default function App () {
  return (
    <Router>
      <div>
        <ul>
          <span>
            <Link to="/">Scores</Link>
          </span>
          <span>
            <Link to="/game">New Game</Link>
          </span>
          <span>
            <Link to="/debugger">debugger</Link>
          </span>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <h3>Greetings!</h3>
            <HiScores />
          </Route>
          <Route path="/game">
            <PlayGame />
          </Route>
          <Route exact path="/debugger">
            <ScoreDebugger />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}
