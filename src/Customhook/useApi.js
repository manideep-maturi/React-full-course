import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useApi = (url) => {
  let [apiData, setApiData] = useState(null)
  useEffect(() => {
    async function api() {
      let { data } = await axios.get(url)
      setApiData(data)
    
      api()
    }
  }, [])
  return { apiData }
}

export default useApi