import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedrouter = ({children}) => {
  let loginstatus=localStorage.getItem("islogined")
  if(loginstatus){
    return children
  }
  return <Navigate to="/login"/>
}

export default Protectedrouter