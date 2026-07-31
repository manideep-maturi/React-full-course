import axios from 'axios'
import { useEffect, useState } from 'react'
import useApi from './useApi'

const FetchData = () => {
  let { apiData } = useApi("https://dummyjson.com/products")
  console.log(apiData)
  return (
    <ol>
      {apiData == null ? "Loading..." : apiData.products.map((item) => {
        return <li key={item.id}>{item.title}</li>
      })}
    </ol>
  )
}
export default FetchData