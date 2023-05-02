import React, { createContext } from 'react'

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const user = {
        displayName: "Islam Md. Nazmul",
        email: "n.islam@cloudly.io"
    }
  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders