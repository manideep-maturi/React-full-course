import React, { memo } from "react";

const MemoComponents = ({ details }) => {
     console.log("Memo is reredering")
  return (
    <div>
      <h1>Name:{details}</h1>
    </div>
  );
};

export default memo(MemoComponents)
