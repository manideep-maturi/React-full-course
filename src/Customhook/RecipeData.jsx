import React from 'react'
import useApi from './useApi'

const RecipeData = () => {
  let { apiData } = useApi("https://dummyjson.com/recipes")
  console.log(apiData)
  return (
    <div>
      {apiData == null ? "Loading..." : apiData.recipes.map((item) => {
        return <img src={item.image} alt={item.name} height={200} width={200} key={item.id} />
      })}
    </div>
  )
}

export default RecipeData