import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Normally you would call API here
    alert(`User ${firstname} ${lastname} registered!`);
    navigate("/dashboard");
  };

  return (
    <div >
      <h2>Register User</h2>
      <input placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} /><br /><br />
      <input placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} /><br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
