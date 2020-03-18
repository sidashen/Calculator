import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      operator: null,
      result: 0,
      firstNum: 0,
      lastNum: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      result: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.result} onChange={this.handleChange}></input>
        <input value={this.state.firstNum} onChange={this.handleChange}></input>
        <input value={this.state.lastNum} onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default App;
