import React, { memo } from 'react'

const Button = ({children,fun}) => {
  console.log(`${children} component rendering`)
  return (
    <div>
      <button onClick={fun}>{children} </button>
    </div>
  )
}

export default memo(Button)