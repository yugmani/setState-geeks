import React, { Component } from 'react';

class PrevStateDemo extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 0,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <h3>PrevState Demo</h3>
        <p>
          You clicked <span className="greet">{this.state.count}</span> times.
        </p>
        <button onClick={this.updateState}>Click</button>
      </div>
    );
  }
}

export default PrevStateDemo;
