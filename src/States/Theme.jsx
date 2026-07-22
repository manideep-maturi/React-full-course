import React, { Component } from 'react'

 class Theme extends Component {
  constructor(){
    super()
    this.state={
      isLight: true
    }
  }
  handelTheme=()=>{
    this.setState({
      isLight:!(this.state.isLight)
    })
  }
  render() {
    return (
      <div>
        
        <h1>Theme:{this.state.isLight ?"Light":"Dark"}</h1>
        <button onClick={this.handelTheme}>{this.handelTheme?"Switch to Dark theme":"Switch to light Theme"}</button>
      </div>
    )
  }
}
export default Theme