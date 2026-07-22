import React from "react";
import Student from "./Student";

const Branchhead = ({ ...items }) => {
   return (
    <Student{...items}
    />
  );
};

export default Branchhead;
