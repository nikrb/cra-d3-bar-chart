import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {all, filtered} from './data';
import BarChart from './BarChart';

class App extends Component {
  state = {
    data: filtered
  };
  showAll = () => {
    this.setState({data : all})
  };
  filter = () => {
    this.setState({data: filtered});
  };

  render() {
    const barPoints = this.state.data.map( function( ele){
      return ele.total;
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <BarChart data={barPoints} width="600" height="400" />
        </div>
      </div>
    );
  }
}

export default App;
