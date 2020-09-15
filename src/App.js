import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HiScores from './hiScores';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {name: '', score: ''};
  };

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
            <h3>Greetings!</h3>
            <HiScores />
          </Route>
          <Route exact path="/game">
            <h3>put game here</h3>
            <input onChange={this.handleChange.bind(this)} />
            <input name={this.state.input} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
