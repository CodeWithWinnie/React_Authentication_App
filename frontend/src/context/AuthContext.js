import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
// import api from '../api/api'

const AuthContext = createContext()


const BKEP = 'http://localhost:3001'

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)

   

   const register  = async (username, email, password ) => {
      const response = await axios.post(`${BKEP}/api/auth/register`, {username, email, password } )
      setUser(response.data.result)
      localStorage.setItem('user_id', response.data.result?.id)
      return response.data.result
      // localStorage.setItem('user_id', data.user?.user_id)
   }

   

   const login = async (email, password) => {
      const response = await axios.post(`${BKEP}/api/auth/login`, {email, password } )
      setUser(response.data.result)
      return response.data.result
   }

   const logout = async () => {
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

const useAuth = () => useContext(AuthContext)
export {useAuth, AuthProvider}
