import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/users/${id}`)
      .then((res) => {
        setFirstname(res.data.name.firstname);
        setLastname(res.data.name.lastname);
      })
      .catch((err) => console.log("Error fetching user:", err));
  }, [id]);

  const handleUpdate = () => {
    // Normally you'd call a PUT API here
    alert(`User ${id} updated!`);
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update User</h2>
      <input value={firstname} onChange={(e) => setFirstname(e.target.value)} /><br /><br />
      <input value={lastname} onChange={(e) => setLastname(e.target.value)} /><br /><br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateUser;
