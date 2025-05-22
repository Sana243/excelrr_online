//function component
const Header=()=>{

    let menus=["Home","About","contact","Servies","Portfolio"];
    return(
        <>
            <h1>Header</h1>
            <ul>
                {
                      menus.map(
                        (element,index,array)=><li>{element}</li>
                      )
                }
            </ul>
        </>
    )
}

export default Header;