import React from "react";

const Student = ({batchCode,yop,placementStatus,children }) => {
  return <>
  <p>Batch code :{batchCode}</p>
  <p>Yop : {yop}</p>
  <p>Placementststus : {placementStatus}</p>
  <p>{children}</p>
  </>
};

export default Student;
