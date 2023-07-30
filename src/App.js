import { Component } from "react";
// import ComponentA from "./Components/Component/ComponentA";
import Timer from "./Components/Timer/TimerOne";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mount: false,
    };
  }
  handleMount = () => {
    this.setState((prevState) => ({ mount: !prevState.mount }));
  };
  render() {
    return (
      <>
        {/* <ComponentA /> */}
        <button onClick={this.handleMount}>
          {this.state.mount ? "Un-Mount" : "Mount"}
        </button>
        {this.state.mount ? <Timer /> : null}
      </>
    );
  }
}
