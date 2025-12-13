// import React from "react"
// import LoginSignup from "./components/LoginSignup/LoginSignup";

// function App() {
//   return (
//     <div>
//       <LoginSignup/>
//     </div>
//   );
// }

// export default App;
// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginSignup from "./components/LoginSignup/LoginSignup";   
import Dashbord from "./components/dashbord";       

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn"); 

  return (
    <Router>
      <Routes>
        {/* Root route */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashbord" /> : <LoginSignup />}
        />

        {/* Dashboard route */}
        <Route
          path="/dashbord"
          element={isLoggedIn ? <Dashbord /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
