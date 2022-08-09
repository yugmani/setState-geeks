import React, { Component } from 'react';

class SetStateDemo extends Component {
  constructor(props) {
    super(props);

    //set initial state
    this.state = {
      greeting: 'Click the button to receive greetings',
      myStyle: '',
    };

    //Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    //changing state
    this.setState({
      greeting: 'GeeksForGeeks welcomes you!!',
      myStyle: 'greet',
    });
  }

  render() {
    return (
      <div>
        <h1>Greeting Portal</h1>
        <p className={this.state.myStyle}>{this.state.greeting}</p>
        <button onClick={this.updateState}>Click Me!</button>
      </div>
    );
  }
}

export default SetStateDemo;
