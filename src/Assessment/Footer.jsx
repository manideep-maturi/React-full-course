import React from 'react'

const Footer = ({companyName="QSpiders Dilsukhnagar",children}) => {
  return <>
   <footer>
      <hr />
      <h3>Company: {companyName}</h3>
      {children}
    </footer>
  
  </>
  
}

export default Footer