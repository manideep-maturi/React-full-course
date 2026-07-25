import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
 let {state} =useLocation()
  return (
    <><h1>Contact</h1>
    <h1>email:{state?.email}</h1>
    <h2>Password: {State?.password}</h2>
    </>
  )
}

export default Contact