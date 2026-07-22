import React from "react";

const Trainer = ({ image, trainerName, designation, experience }) => {
  return (
    <>
    <img src={image} alt={trainerName} />
      <p>trainerName:{trainerName}</p>
      <p>designation: {designation}</p>
      <p>experience: {experience}</p>
    </>
  );
};

export default Trainer;
