const Container=()=>{
    let data="hello world logic in container component";
    return( 
    <>
        <Presentation data={data}/>
    </>
    );
};

const Presentation=({data})=>{
    return(
        <>
         <div>{data} in presentation</div>
         <div>presentation component</div>
        </>
    );

};
export default Container;