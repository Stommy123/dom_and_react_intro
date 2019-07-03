import React, { Component } from 'react';
import { data } from './data';
import { Header, Players, Form, PlayerDetail } from './components';

class App extends Component {
  state = { players: data, selectedPlayerIndex: -1 };

  addPlayer = ({ name, age }) => {
    const { players } = this.state;
    const newPlayer = {
      id: players.length,
      name,
      age,
      score: 0
    };
    const newPlayerList = [...players, newPlayer];
    this.setState({ players: newPlayerList });
  };

  removePlayer = id => {
    const { players } = this.state;
    const filteredPlayerList = players.filter(player => player.id !== id);
    this.setState({ players: filteredPlayerList });
  };

  selectPlayer = id => this.setState({ selectedPlayerIndex: id });

  updatePlayerScore = (id, change) => {
    const { players } = this.state;
    const updatedPlayerList = players.map(player =>
      player.id === id ? { ...player, score: (player.score += change) } : player
    );
    this.setState({ players: updatedPlayerList });
  };

  getHighScore = _ => {
    const { players } = this.state;
    const scores = players.map(player => player.score);
    const highScore = Math.max(...scores);
    if (highScore) return highScore;
  };

  render() {
    const { players, selectedPlayerIndex } = this.state;
    const highScore = this.getHighScore();
    const playerCount = players.length;
    const totalPoints = players.reduce((acc, player) => acc + player.score, 0);
    const selectedPlayer = selectedPlayerIndex !== -1 && players[selectedPlayerIndex];
    return (
      <div className="scoreboard">
        <Header totalPoints={totalPoints} playerCount={playerCount} />
        <Players
          players={players}
          removePlayer={this.removePlayer}
          updatePlayerScore={this.updatePlayerScore}
          selectPlayer={this.selectPlayer}
          highScore={highScore}
        />
        <Form addPlayer={this.addPlayer} />
        <PlayerDetail selectedPlayer={selectedPlayer} />
      </div>
    );
  }
}

export default App;
