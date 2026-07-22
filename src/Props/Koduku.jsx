// import React from 'react'

// const Koduku = ({item,price,skills,education:{degree,result},fun}) => {
//   return <>
//   <h1>Son Received a {item} 😎 From his Father which is a cost of {price}💵💵💵💵</h1>
//   <p>Son is Very Happy😊😁😍 </p>


//   <p>his details are  {fun()} </p>


//   <ol> {skills.map((ele)=>{
//     return <li>{ele}</li>
//    })}</ol>
// <p>{fun()}</p>
//   </> 
// }
// export default Koduku


// import React from 'react'

// const Koduku = ({item,price,children}) => {
//   return <>
//   <h1>I am in the sleep suddenly i have received a {item} from my dad which is worth of {price} suddenly my father kicked me and scolded me like this {children}</h1>
//   </>
// }

// export default Koduku



import Manavadu from './Manavadu'

//if to many items are presend we use spread operator{....item}

const Koduku = ({...item}) => {
  return <Manavadu {...item}></Manavadu>
}

export default Koduku