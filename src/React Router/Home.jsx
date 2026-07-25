import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate=useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>navigate("/about")}>Go to about </button>
      <br />
      <button onClick={()=>navigate("/contact"),{state:{email:"manideep@gmail.com",password:"123456789"}}}>pass the data to the about page</button>
    </div>
  );
};

export default Home;
