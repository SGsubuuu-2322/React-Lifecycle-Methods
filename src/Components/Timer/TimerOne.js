import { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    console.log("TimerOne constructor method...");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps method...");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer shouldComponentUpdate method...");
    return true;
  }

  incValue = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  render() {
    console.log("TimerOne render method...");
    return (
      <>
        <h1>Value: {this.state.value}</h1>
        <button onClick={this.incValue}>Click For Updation</button>
      </>
    );
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount method...");
    console.log("-------------------------------------");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapShotBeforeUpdate method...");
    return null;
  }

  componentDidUpdate() {
    console.log("Timer componentDidUpdate method...");
    console.log("-------------------------------------");
  }
}
