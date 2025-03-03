

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the session or token
    localStorage.clear(); // Example of clearing localStorage
    sessionStorage.clear(); // Optionally clear sessionStorage

    // Navigate to the home page after logging out
    navigate("/home");
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
