import React from 'react';

const Calculation = (props) => {
  return (
    <div>
      <div className="container">
        <button name="+" onClick={(e) => props.calculate(e)} className="computation">+</button>
        <button name="*" onClick={(e) => props.calculate(e)} className="computation">*</button>
        <button name="-" onClick={(e) => props.calculate(e)} className="computation">-</button>
        <button name="/" onClick={(e) => props.calculate(e)} className="computation">/</button>
      </div>
      <button name="AC" onClick={() => props.clearAll()} className="clear operator">AC</button>
      <button name="=" onClick={(e) => props.calculate(e)} className="result operator">=</button>
    </div>
  );
}

export default Calculation;