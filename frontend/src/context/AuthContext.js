import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'


const AuthContext = createContext()


const BKEP = 'http://localhost:3001'

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)

   

 const register  = async (cred) => {
      const {data} = await axios.post(`${BKEP}/api/auth/register`, cred)
      setUser(data.result)
      localStorage.setItem('user_id', data.result.id);
      return data
      // localStorage.setItem('user_id', data.user?.user_id)
   }

   

   const login = async (cred) => {
      const {data} = await axios.post(`${BKEP}/api/auth/login`, cred)
      setUser(data.result)
      localStorage.setItem('user_id', data.result[0].id)
      return data
      // localStorage.setItem('user_id', data.user?.user_id)
   }

   const logout = async () => {
      await axios.post(`${BKEP}/api/auth/logout`)
      setUser(null)
   }

 
   const values = {
      user,
      logout,
      login,
      register,
   }

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}


export {AuthContext, AuthProvider}
