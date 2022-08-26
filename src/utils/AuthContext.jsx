import { createContext, useState, useEffect } from "react";

export const AuthUser = createContext();

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setuserInfo] =  useState(null)

    const signIn = () => {
        setIsLoading(false)
        setuserInfo("asdf")
    }
    const signUp = () => {
        setIsLoading(false)
        setuserInfo("asdf")
    }
    const signOut = () => {
        setIsLoading(false)
        setuserInfo(null)
    }

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);

return(
    <AuthUser.Provider value={{isLoading, userInfo, signIn,signUp, signOut}}>
        {children}
    </AuthUser.Provider>
)
} 
