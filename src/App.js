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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value })
  }

  handleCompute = (e) => {
    let resultNum = this.computeResult();
    if (e.target.name === '+') {
      this.setState({
        result: resultNum
      })
    }
  }

  computeResult() {
    let { firstNum, lastNum } = this.state;
    let computeResult;
    computeResult = `${parseFloat(firstNum) + parseFloat(lastNum)}`;
    // if (compute === '-') {
    //   computeResult = `${Number(temp) - Number(result)}`;
    // }
    // if (compute === '*') {
    //   computeResult = `${Number(temp) * Number(result)}`;
    // }
    // if (compute === '/') {
    //   computeResult = `${Number(temp) / Number(result)}`;
    // }
    // if (computeResult.length > 9) {
    //   return Number(computeResult).toExponential(3);
    // } else {
    return computeResult;
  }

  render() {
    return (
      <div>
        <input value={this.state.result} name="result"></input>
        <input value={this.state.firstNum} onChange={this.handleChange} name="firstNum"></input>
        <input value={this.state.lastNum} onChange={this.handleChange} name="lastNum"></input>
        <div>
          <button name="+" onClick={this.handleCompute}>+</button>
          <button>-</button>
          <button>/</button>
          <button>*</button>
          <button>AC</button>
          <button>=</button>
        </div>
      </div>
    );
  }
}

export default App;
