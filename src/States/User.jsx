import React, { Component } from 'react'

//  class User extends Component {
//   constructor(){
//     super()
//     this.state={
//       name:"Ramu",
//       age:20
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>Name:{this.state.name}</h1>
//         <h4>Age: {this.state.age}</h4>
//       </div>
//     )
//   }
// }
// export default User;

//!Update the values using setstate()
class User extends Component {
  constructor(){
    super()
    this.state={
      name:"Ramu",
      age:20
    }
  }

  handelInfo =()=>{
this.setState({name:"Rahul",age:26})
  }
  render() {
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h4>Age: {this.state.age}</h4>
        <button onClick={this.handelInfo}>Change info</button>
      </div>
    )
  }
}
export default User;
