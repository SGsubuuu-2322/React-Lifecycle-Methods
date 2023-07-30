import { Component } from "react";

export default class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
    };
    console.log("ComponentB in Constructor...");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentB in getDerivedStateFromProps...");
    return null;
  }

  componentDidMount() {
    console.log("ComponentB in componentDidMount");
  }

  render() {
    console.log("ComponentB in render...");
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}
