import React, { Component } from 'react';
import './styles/App.css';
import Calculation from './component/Calculation'

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

  parseCompute = (e) => {
    const { result, operator } = this.state;
    const compute = e.target.name;
    const computeNum = this.computeResult();
    const newResult = this.toFixed(computeNum);
    if (compute === '=') {
      return {
        operator: compute,
        result: newResult
      };
    } else if (compute === 'AC') {
      return {
        operator: compute,
        result: 0
      };
    } else {
      return {
        operator: compute,
        result: 0
      }
    }
  }

  toFixed = (num) => {
    return Math.round(num * 100) / 100;
  }

  computeResult = () => {
    const { operator, firstNum, lastNum } = this.state;
    let computeResult;

    if (operator === '+') {
      computeResult = `${parseFloat(firstNum) + parseFloat(lastNum)}`;
    } else if (operator === '-') {
      computeResult = `${parseFloat(firstNum) - parseFloat(lastNum)}`;
    } else if (operator === '/') {
      computeResult = `${parseFloat(firstNum) / parseFloat(lastNum)}`;
    } else if (operator === '*') {
      computeResult = `${parseFloat(firstNum) * parseFloat(lastNum)}`;
    }
    return computeResult;
  }

  handleCompute = (e) => {
    this.setState(this.parseCompute(e));
  }

  clear = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: '' })
  }

  clearAll = () => {
    this.setState({
      result: 0,
      firstNum: 0,
      lastNum: 0
    });
  }

  render() {
    return (
      <div className="calculator">
        <input
          value={this.state.result}
          name="result"
          readOnly
          className="result-number input"></input>
        <input
          value={this.state.firstNum}
          onChange={this.handleChange}
          name="firstNum"
          onClick={this.clear}
          className="first-number input"></input>
        <input
          value={this.state.lastNum}
          onChange={this.handleChange}
          name="lastNum"
          onClick={this.clear}
          className="last-number input"></input>
        <Calculation calculate={this.handleCompute} clearAll={this.clearAll} />
      </div>
    );
  }
}

export default App;
