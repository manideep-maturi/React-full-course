import React, { useState } from "react";

const Inline = () => {
  let [isdark, setIsdark] = useState(true);
  let pstyle = {
    color: "White",
    backgroundColor: "red",
    padding: "30px",
    textAline: "center",
  };

  let handelClick=()=>{
    setIsdark(!isdark)
  }
  let clickStyle={
    // backgroundColor:"Black"
    Color:"White"
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>Lorem, ipsum dolor</h1>

      <p style={pstyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptas
        voluptatem minus quidem, maiores sunt repellendus dignissimos in
        repellat veniam optio, obcaecati, rerum eligendi dolores ab natus
        doloremque sed animi.
      </p>

      <button onClick={handelClick} style={clickStyle}>
        {isdark ? "Dark Mode" : "light Mode"}
      </button>
    </div>
  );
};

export default Inline;
