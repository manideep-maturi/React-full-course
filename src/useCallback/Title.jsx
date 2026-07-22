import React, { memo } from 'react'

const Title = () => {
  console.log(`title component rendering`)
  return (
    <div><h1>use Call back</h1></div>
  )
}

export default memo(Title)