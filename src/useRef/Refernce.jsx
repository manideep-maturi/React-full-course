//!Example 1
// import { useRef } from "react";

// const Refernce = () => {
//   let inputRef = useRef(null);

//   let handelfocus = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <>
//       <input type="text"ref={inputRef} />
//       <br />
//       <button onClick={handelfocus}>on click focus</button>
//     </>
//   );
// };

// export default Refernce;

//!Example 2 Changeing the value

// import { useRef } from "react";

// const Refernce = () => {
//   let inputRef = useRef(null);
//   let handleinput = () => {
//     inputRef.current.value="Mani";
//   };

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleinput}>handel the text </button>
//     </>
//   );
// };

// export default Refernce;

//!Example 3 rerendering the component
import { useRef } from "react";

const Refernce = () => {
  let count = useRef(0)

  let handelcount = () => {
    count.current++
    console.log(count.current)
  }
  return<>
    <h1>count:{count.current}</h1>
    <button onClick={handelcount}>Increment</button>
  </>
}

export default Refernce;
