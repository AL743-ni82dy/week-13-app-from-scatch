import React from 'react';
import Login from './Login';
import Game from './Game';
import Navbar from './Navbar';
import EndGame from './EndGame';
import { postScore } from '../../Utility';

class Main extends React.Component {
  state = {
    showLogin: true,
    showGame: false,
    showEndGame: false,
    name: "",
    score: 0,
  };
  flipCount = 0;

  handleLogin = (name, boolean, boolean2) => {
    this.setState({ name: name, showLogin: boolean, showGame: boolean2 });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.flipCount });
      this.saveScore(this.state.name, this.flipCount )
      this.flipCount = 0
    } else {
      this.setState({ showEndGame: boolean });
    }
  };

  handleFlipCount = () => {
    this.flipCount = this.flipCount + 1;
  }

  saveScore = async (theName, theScore) => {
    const result = await postScore(theName, theScore)
    console.log(result)
  }

  render() {
    const { showLogin, showGame, name, score, showEndGame } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        {showGame ? <Game endGame={this.handleEndGame} flipCount={this.handleFlipCount} /> : null }
      </div>
    );
  }
}

export default Main;
