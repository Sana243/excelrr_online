import React from 'react'

const EventTask1 = () => {
    let click_Func=()=>{
        alert("clicked via arrow function by")

    }
    let click_Func2=(name)=>{
        alert("clicked via arrow function by"+name)

    }
    let double_Click_Func=()=>{
        alert("clicked via arrow function by")

    }

    let arr=['ball','bat','cat']

    let arr_double_click_func=(element)=>{
        alert("double clicked on "+element)
    }
  return (
    <>
     <button onClick={() => alert("clicked")}>Click</button>
     <br/>
     <button on onClick={click_Func}>Click Me</button>
     <br />
     <button onClick={()=>click_Func2("Sana")}>Click to pass name </button>
     <br />
     <button onDoubleClick={double_Click_Func}>double click</button>
     <br/>
     <ul>
        {
            arr.map(
                (element,index,array)=>{
                    return(
                    <li 
                    key={index}
                    onDoubleClick={()=>arr_double_click_func (element)}>
                        {element}
                    </li>
                    );
                }
            )
        }
     </ul>
    </>

  );
}

export default EventTask1