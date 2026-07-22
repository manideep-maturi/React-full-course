//*1)onClick()

//!Example 1
// let handelTime =()=>{
//   alert(new Date().toLocaleDateString())
// }

// const Events = () => {
//   return <>
//   <button onClick={handelTime}>Time </button>
//   </>
// }

// export default Events

//!Example 2
// import React from 'react'
// let greet=(name)=>{
//   return `good Afternoon ${name}`
// }
// const Events = () => {
//   return <>
//   <button onClick={()=>{console.log(greet("Rahul sir"))}} > Greet the person</button>
//   </>
// }

// export default Events

//!Example 3
// let handelMessage =(e)=>{
//   console.log(e)
//    console.log(e.target)
//    console.log(e.type)
// }
// const Events = () => {
//   return <div>
//     <button onClick={handelMessage}>Generate message </button>
//   </div>
// }

// export default Events
//*2)FOCUS,CHANGE AND BLUR
// let handelFocus=(e)=>{
//   e.target.style.background="red"
// }
// let handelChange=(e)=>{
// console.log(e.target.value)
// }

// let handelBlur =(e)=>{
// e.target.style.background="green"

// }
//  const Events = () => {
//   return (
//     <div>
//       <input type='text' onFocus={handelFocus} onChange={handelChange} onBlur={handelBlur}/>

//     </div>
//   )
// }
// export default Events;

//*Submit

// import React from "react";

// let handelsubmit =(e)=>{
// e.preventDefault()
// console.log("On submit ");
// }
// const Events = () => {
//   return (

//     <div>
//       <form onSubmit={handelsubmit}>
//         <input type="email" placeholder="Enter Your Email" />
//         <br /> <br />
//         <input type="password" placeholder="Enter password" />
//         <br />
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default Events;

//* 4)mouseenter mousemove mouseleave

import React from "react";

let mouseenter = (e) => {
  e.target.style.background = "black";
  e.target.style.color = "white";
};
let mousemove = (e) => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  e.target.style.background=`rgb(${red},${green},${blue})`
};
let mouseleave=(e)=>{
 let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  e.target.style.background=`rgb(${red},${green},${blue})`
}

const Events = () => {
  return <div>Events</div>;
};

export default Events;
