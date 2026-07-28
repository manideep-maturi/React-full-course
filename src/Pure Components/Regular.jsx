import React, { Component } from "react";

export default class Regular extends Component {
  constructor() {
    super();
    this.state = {
      name: "mani",
    };
  }
  render() {
    console.log("Rendering the Regular")
    return (
      <>
        <h1>Name:{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Manideep" })}>Regular COmponents </button>
      </>
    );
  }
}
