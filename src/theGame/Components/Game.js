import React from "react";
import Images from "./Images";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Images endGame={this.props.endGame} flipCount={this.props.flipCount} />
      </div>
    );
  }
}

export default Game;
