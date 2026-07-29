import React from "react";
import { createPortal } from "react-dom";

const App = () => {
  return createPortal(
    <>
      <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        architecto ipsum accusamus ullam natus nemo et reiciendis doloribus
        facere eos!
      </p>
    </>,document.getElementById("portel-root")
  )
};

export default App;
