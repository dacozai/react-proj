import React from 'react';

interface MyProps {
  value: string,
  onClick: Function;
}

class Square extends React.Component<MyProps> {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}


export default Square;