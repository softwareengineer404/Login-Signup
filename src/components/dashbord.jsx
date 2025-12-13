import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashbord.jsx';
function Dashbord() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("loggedin")
        navigate("/")
    };
    return (
        <div style={{ padding: "20px", minHeight: "100vh", position: "relative" }}>
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
            <h1>wellcome to Dashbord</h1>
            <button onClick={HandleLogout}>Logout</button>
        </div>
    );
}
export default Dashbord