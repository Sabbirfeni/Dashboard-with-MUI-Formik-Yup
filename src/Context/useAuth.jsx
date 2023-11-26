import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [ open, setOpen ] = useState(false);
    const values = { open, setOpen };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export default useAuth;