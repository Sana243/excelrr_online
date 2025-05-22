import { createContext, useState } from "react";
import { useSubmit } from "react-router-dom";

export const GlobalAuthContext=createContext(null);

export function UserProvider({children}) {
    let [user, setUser]=useState(null);

    return(
    <GlobalAuthContext.Provider value={{user, setUser}}>
        {children}
    </GlobalAuthContext.Provider>
    );
}