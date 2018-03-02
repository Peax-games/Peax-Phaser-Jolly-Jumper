import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JollyJumper from './Game/JollyJumper';

class App extends Component {
  render() {
    JollyJumper();
    return (
      <div id="myCanvas">

      </div>
    );
  }
}

export default App;
