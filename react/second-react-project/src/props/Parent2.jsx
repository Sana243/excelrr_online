
const Parent2=()=>{
    return (
    <>
    <h1>Parent2</h1>
    <Child2 name={"Sana"} id={1} age={20} email={"sana12@gmail.com"}/>
    </>
    )   
}

//const Childs=({name,id,age,email})
const Child2=(props)=>{
    return (
        <>
        <h1>{props.name}</h1>
        <h1>{props.id}</h1>
        <h1>{props.age}</h1>
        <h1>{props.email}</h1>
        <h1>Child2</h1>
        </>
        )   
}
export default Parent2;