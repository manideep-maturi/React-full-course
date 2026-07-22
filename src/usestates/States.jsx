//!Example 1 Count

// import { useState } from "react";
// const States = () => {
//   let [count, setCount] = useState(0);

//   let handelIncrement = () => {
//     setCount(count + 1);
//   };

//   let handelDecrement = () => {
//     setCount(count - 1);
//   };

//   let handelReset = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handelIncrement}>Increment</button>
//       <button onClick={handelDecrement}>Decrement</button>
//       <button onClick={handelReset}>Reset</button>
//     </div>
//   );
// };

// export default States;

//!Example 2 SetString

// import { useState } from "react";

// const States = () => {
//   let [food, setFood] = useState("");

//   let handelTea =()=>{
//     setFood("Tea Bisket")
//   }
//   let handelFood =()=>{
//     setFood("Roti With Pannercurry")
//   }
//   return (
//     <div>
//       <h1>I am having :{food} </h1>
//       <button onClick={handelFood}>Food</button>
//       <button onClick={handelTea}>Tea</button>
//     </div>
//   );
// };

// export default States;

//!Example 3 Bollean type of data

// import React from 'react'

// const States = () => {

//   return (
//     <div>
//       <h1>Theme:{}</h1>
//     </div>
//   )
// }

// export default States

//!Example 3 Bollean type of data
// import { useState } from "react";

// const States = () => {
//   let [subjects,setSubjects] = useState(["HTML", "CSS", "Java Script"])

//   let handelReact=()=>{
//     setSubjects([...subjects,"React"])
//   }
//   return (
//     <div>
//       <h1>List of Technologies :</h1>
//       <ol>
//         {
//         subjects.map((item,index) => {
//          return  <li key={index}>{item}</li>;
//         })}
//       </ol>
//       <button onClick={handelReact}>Add React</button>
//     </div>
//   );
// };

// export default States;

//!Example 5 object
// import React, { useState } from "react";

// const States = () => {
//   let [details, setDetails] = useState({
//     name: "Manideep",
//     age: 21,
//   });

//   let { name, age } = details;
//   return (
//     <div>
//       <h1>My Name is {name}</h1>
//       <h2>i am {age} years old</h2>
//     </div>
//   );
// };

// export default States;

//!Example 6 Functional Update
import { useState } from "react";





const States = () => {
  let [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>count: {count} </h1>
    </div>
  );
};

export default States;
