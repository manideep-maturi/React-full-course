import React, { useMemo, useState } from "react";

const Memo = () => {
  let [age, setAge] = useState(20);
  let [salary, setSalary] = useState(200000);
  let handelAge = () => {
    setAge(age + 1);
  };
  let handelSal = () => {
    setSalary(salary + 10000);
  };

  let chackAge = useMemo(() => {
    let i = 0;
    while (i < 10000000000) i++;
    return age % 2;
  }, [age]);
  return (
    <>
      <h1>Age :{age}</h1>
      <button onClick={handelAge}>Increment</button>
      {chackAge === 1 ? <mark>Odd</mark> : <mark>Even</mark>}
      <h1>Salary: {salary}</h1>
      <button onClick={handelSal}>Salary increment</button>
    </>
  );
};


export default Memo;
