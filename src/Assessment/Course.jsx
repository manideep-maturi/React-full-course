import React from "react";

const Course = ({ coursename, duration, fees }) => {
  return (
    <>
      <p>coursename: {coursename}</p>
      <p>duration:{duration}</p>
      <p>fees:{fees}</p>
    </>
  );
};

export default Course;
