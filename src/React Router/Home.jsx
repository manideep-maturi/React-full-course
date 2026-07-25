import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate=useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>navigate("/about")}>Go to about </button>
      <br />
      <button onClick={()=>navigate("/contact"),{state:{email:"manideep@gmail.com",password:"123456789"}}}>pass the data to the Contact page</button>
      <button onClick={navigate("/student")}>go to Student</button>
      <hr />
      <button onClick={()=>navigate("./student/101/rahul")}>Student101</button>
      <button onClick={()=>navigate("./student/102/pavan")}>Student102</button>
      <button onClick={()=>navigate("./student/103/monty")}>Student103</button>
    </div>
  );
};

export default Home;
