import { Component } from "react";

// class Counter extends Component {

//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   render() {
//     return <>
//     <h1>Count -{this.state.count}</h1>
//     </>
//   }
// }
// export default Counter;

//!Update the values using setstate()
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 10000 });
          }}
        >Increment</button>
        <button onClick={() => {
            this.setState({ count: this.state.count - 10252 });
          }}>Decrement</button>
        <button onClick={() => {
            this.setState({ count: 0 });
          }}>Reset</button>
      </>
    );
  }
}
export default Counter;
