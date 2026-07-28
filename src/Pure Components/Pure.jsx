import React, {  PureComponent } from "react";

export default class Pure extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "mani",
    };
  }
  render() {
    console.log("Rendering the pure")
    return (
      <>
        <h1>Name:{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Manideep" })}>Change name</button>
      </>
    );
  }
}
