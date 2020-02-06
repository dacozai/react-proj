import React from 'react';
import './Square.css';

interface MyProps {
  value: string,
  onClick: () => void;
}

function Square(props: MyProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


export default Square;