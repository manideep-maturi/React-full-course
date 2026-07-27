import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  let handellogout = () => {
    localStorage.removeItem("islogined");
    navigate("/login");
  };
  return (
    <div>
      <h1>Dashboard page</h1>
      <h1>Welcome User</h1>
      <button onClick={handellogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
