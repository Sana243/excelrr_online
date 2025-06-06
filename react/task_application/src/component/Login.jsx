import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  let navigate = useNavigate();
  let userName = useRef(null);
  let userPassword = useRef(null);
  const handleSubmit = (event) => {

    if (
      userName.current.value == "admin" &&
      userPassword.current.value == "1234"
    ) {
      let obj = {
        username: userName.current.value,
        password: userPassword.current.value,
      };
      setUser(obj);

      navigate("/dashboard");
    } else {
      navigate("/error");
    }
  };
  return (
    <>
    <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter username" ref={userName} />
        <br />
        <br />
        <input type="text" placeholder="enter password" ref={userPassword} />
        <br />
        <br />
        <input
          type="submit"
          value="Login"
          className="btn btn-outline-primary"
        />
      </form>
    </>
  );
};

export default Login;