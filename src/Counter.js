import React from "react";

import CountDisplay from "./CountDisplay";

const list = ["Tomek", "Pawel", "Julka"];

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
  }

  increment = () => this.setState(state => ({ count: state.count + 1 }));
  decrement = () => this.setState(state => ({ count: state.count - 1 }));

  render() {
    const { count } = this.state;
    return (
      <div>
        {list.map((name, i) => <div key={i}>{name}</div>)}
        <CountDisplay count={count} />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
