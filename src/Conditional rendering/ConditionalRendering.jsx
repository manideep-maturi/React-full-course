//$Using ternary operator
//!Example 1
// let adminlogin =false
// const ConditionalRendering = () => {
//   return <>
//   {adminlogin?"Welcome Admin":"Welcome user"}
//   </>
// }

// export default

//!Example 2
// import React from 'react'

// let age=1;

// const ConditionalRendering = () => {
//   return <>
//   {age>=18 ?"You Can vote ":"you are not eligible to vote"}
//   </>
// }

// export default ConditionalRendering

//!Example 3
// import Adminpage from "./Adminpage"
// import Userpage from "./Userpage"
// const ConditionalRendering = () => {
//   let login=true
//   return <>
//   {login?<Adminpage/>:<Userpage/>}
//   </>
// }

// export default ConditionalRendering

//! logical AND &&

// import React from 'react'

// const ConditionalRendering = () => {
//   let isadmin=true
//   return (
//     <div>{isadmin&&"Welcome Admin"}</div>
//   )
// }

// export default ConditionalRendering

//! Example 2
// import React from 'react'
// let hungry=true
// const ConditionalRendering = () => {
//   return <>
//   {hungry&&"go and have some food "}

//   </>
// }

// export default ConditionalRendering

//!IF-ELSE

//@Example 1
// import React from 'react'

// const ConditionalRendering = () => {
//  let amt=250;
//  if(amt>200){
// return<h1>"Hello wellcome to varapradha 2.0"</h1>
//  }else{
//   return "Muskoni hostel lo tinu ra"
//  }

// }

// export default ConditionalRendering

//@Example2 if else
// import React from 'react'
// marks example
// const ConditionalRendering = () => {
//   return (
//     <div>ConditionalRendering</div>
//   )
// }

// export default ConditionalRendering

// ! Real time example

//Example 1

// import React from 'react'
// let headahe =true
// let result;
// const ConditionalRendering = () => {
//   if(headahe){
//     result=<h1>Drink Tea</h1>
//   }else{
//     result = <h1>Drink boost</h1>
//   }
//   return result
// }

// export default ConditionalRendering

import React from "react";
let Darkmode = false;
const ConditionalRendering = () => {
  return (
    <div>
      <button>{Darkmode ? "Dark mode" : "Light mode"}</button>
    </div>
  );
};

export default ConditionalRendering;
