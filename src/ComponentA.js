import { Component } from "react";
// import ComponentB from "./ComponentB";
import "./style.css"; // Import the CSS file

export default class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: [],
    };
    console.log("ComponentA in Constructor...");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA in getDerivedStateFromProps...");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA in componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log("ComponentA in render...");
    console.log(this.state.data);
    return (
      <>
        <h1>{this.state.name}</h1>
        <h2>Users Data-Table</h2>

        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Address</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((d, index) => {
              return (
                <tr key={index}>
                  <td className="cell-blue">{d.name}</td>
                  <td className="cell-green">{d.email}</td>
                  <td className="cell-purple">{d.company.name}</td>
                  <td className="cell-blue">{d.address.street}</td>
                  <td className="cell-green">{d.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
