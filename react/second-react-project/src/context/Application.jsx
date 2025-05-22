/**
 * Login
 * Dashboard
 * NavBar
 * Edit
 */

import { useContext } from "react";
import AuthContext from "./AuthContext";

const Login =()=>{
    let obj={
        "username":"sana",
        "password":"1234",
        "email":"sana123@gmail.com",
        "mobile":"1234567800"
    }
    return(
        <>
         <div>Login</div>
         <AuthContext.Provider value={obj}>
         <Dashboard/>
         </AuthContext.Provider>
        </>
    );

};
const Dashboard =()=>{
    return(
        <>
        <div>Dashboard</div>
        <NavBar/>
        </>
    );
    
};
const NavBar =()=>{
    return(
        <>
        <div>NavBar</div>
        <Edit/>
        </>
    );
    
};
const Edit =()=>{
    let loginObject=useContext(AuthContext);
    return<>
        <div>{loginObject.username},{loginObject.password}</div>
        <div>edit</div>
        </>
    
};

export default Login;
