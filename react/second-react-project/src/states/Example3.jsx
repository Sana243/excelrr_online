import {useState} from "react"
import cat from "./cat.jpg";
import color from "./color.jpg";


const Example3 =()=>{
    let[image,setImage]=useState(cat);

    let change=()=>{
        setImage(color);
    }
    return(
        <>
         <img src={image} alt="" width="200px" height="200px"/>
         <br/>
         <button onClick={change}>Click</button>
        </>
    );

};
export default Example3;