import { useState } from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
  let { count, handleDecrement, handleIncrement } = useCounter()
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Counter2