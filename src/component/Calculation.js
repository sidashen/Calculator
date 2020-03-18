import React from 'react';

const Calculation = (props) => {
  return (
    <div>
      <button name="+" onClick={(e) => props.calculate(e)}>+</button>
      <button name="-" onClick={(e) => props.calculate(e)}>-</button>
      <button name="/" onClick={(e) => props.calculate(e)}>/</button>
      <button name="*" onClick={(e) => props.calculate(e)}>*</button>
      <button name="AC" onClick={() => props.clearAll()}>AC</button>
      <button name="=" onClick={(e) => props.calculate(e)}>=</button>
    </div>
  );
}

export default Calculation;