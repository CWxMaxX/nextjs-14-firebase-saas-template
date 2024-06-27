"use client"
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
    isLoggedIn : false,
    userName  : '',
    uid : '',
    email : ''
});

export const AuthContextProvider = ({children} : { children : React.ReactNode}) => { 
    const [user, setUser] = useState({
        isLoggedIn : false,
        userName  : '',
        uid : '',
        email : ''
    })
    
    return(
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserAuth = () => {
  return useContext(UserContext);
};