import { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer = null;
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

  //   incValue = () => {
  //     this.setState((prevState) => {
  //       return {
  //         value: prevState.value + 1,
  //       };
  //     });
  //   };
  render() {
    console.log("TimerOne render method...");
    return (
      <>
        {/* <h1>Value: {this.state.value}</h1> */}
        {/* <button onClick={this.incValue}>Click For Updation</button> */}
        <h1>
          Time-Spent:{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount method...");
    console.log("-------------------------------------");

    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapShotBeforeUpdate method...");
    return null;
  }

  componentDidUpdate() {
    console.log("Timer componentDidUpdate method...");
    console.log("-------------------------------------");
  }

  componentWillUnmount() {
    console.log("Timer componentWillUnmount method...");
    console.log("-------------------------------------");

    // Clear the interval when the component is unmounted
    clearInterval(this.timer);
  }
}
