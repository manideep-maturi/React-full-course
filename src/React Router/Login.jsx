import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  let handellogin = () => {
    localStorage.setItem("islogined", true);
    navigate("/dashboard");
  };
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handellogin}>Go to Dashboard</button>
    </div>
  );
};

export default Login;
