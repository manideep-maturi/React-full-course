import React from 'react'

const Sports = ({data}) => {
  // console.log(data)
  return <div>
  <h1> Name : {data.name}</h1>
  <p>Players :{data.players}</p>
  </div>
}

export default Sports