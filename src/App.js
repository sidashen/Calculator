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

  parseCompute(e) {
    const { result, operator } = this.state;
    const compute = e.target.name;
    const newResult = this.computeResult();
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

  computeResult() {
    let { operator, firstNum, lastNum } = this.state;
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
      <div>
        <input value={this.state.result} name="result" readOnly></input>
        <input value={this.state.firstNum} onChange={this.handleChange} name="firstNum" onClick={this.clear}></input>
        <input value={this.state.lastNum} onChange={this.handleChange} name="lastNum" onClick={this.clear}></input>
        <div>
          <button name="+" onClick={(e) => this.handleCompute(e)}>+</button>
          <button name="-" onClick={(e) => this.handleCompute(e)}>-</button>
          <button name="/" onClick={(e) => this.handleCompute(e)}>/</button>
          <button name="*" onClick={(e) => this.handleCompute(e)}>*</button>
          <button name="AC" onClick={() => this.clearAll()}>AC</button>
          <button name="=" onClick={(e) => this.handleCompute(e)}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
