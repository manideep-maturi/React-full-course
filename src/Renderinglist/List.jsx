// import React from 'react'

// const List = () => {
//   let vehicels=["Car","Auto","Bike","Metro"]
//   return (
//     <div>
//       <h1>The list of vehicels</h1>
//       <ol>
//       {
//         vehicels.map((ele)=>{
//           return <li >{ele}</li>
//         })
//       }
//       </ol>
//       </div>
//   )
// }

// export default List

// import React from 'react'

// const List = () => {
//   let numbers=[10,20,30,40]
//   return (
//     <div>
//       <h1>The Unorder list</h1>
// <ul>
//  { numbers.map((ele,index)=>{
//   return <li key={index}>{ele}</li>
//  })

//  }
// </ul>
//     </div>
//   )
// }

// export default List

// import React from "react";

// const List = () => {
//   let Details = [
//     {
//       id: 101,
//       name: "manideep",
//       yop: "2026",
//     },
//     {
//       id: 102,
//       name: "Ravi",
//       yop: "2026",
//     },
//     {
//       id: 103,
//       name: "Raju",
//       yop: "2026",
//     },
//   ];
//   return (
//     <div>
//       <h1>The Details of The Students</h1>
//       <hr />
//       <ol>
//         {Details.map((ele,index) => {
//           return <section key={index}><li>Id:{ele.id}</li>
//           <li>Name: {ele.name}</li>
//           <li>Yop :{ele.yop}</li>
//         <hr />
//           </section>
//         })}
//       </ol>
//     </div>
//   );
// };

// export default List;

import React from 'react'
import Sports from './Sports'
 let sport=[
    {id :1 ,name:"cricket" ,players:11},
    {id :2 ,name:"vollyball" ,players:5},
    {id :3 ,name:"kabaddi" ,players:7}
  ]

const List = () => {
 
  return<>
  {
  sport.map((item)=>{
    return <Sports data={item} key={item.id} />
  })
  } 
  
  
  </>
}

export default List
