// import Javascriptxml from "./jsx/Javascriptxml"

// const App = () => {
// return <Javascriptxml/>
//   return
// }

// export default App

// import Nanna from "./Props/Nanna"

// import React from 'react'

// const App = () => {
//   return <Nanna/>
// }

// export default App

// import React from "react";
// import Footer from "./Assessment/Footer";
// import Institute from "./Assessment/Institute";
// import Batch from "./Assessment/Batch";
// import Navbar from "./Assessment/Navbar";
// import Course from "./Assessment/Course";
// import Trainer from "./Assessment/Trainer";

// const App = () => {
//   const instituteName = "QSpiders";
//   const location = "Dilsukhnagar";
//   const establishedYear = 2005;

//   const coursename = "Java Full Stack";
//   const duration = "6 Months";
//   const fees = 24950;

//   const trainerName = "Rahul";
//   const designation = "React Trainer";
//   const experience = "2 Years";
//   const trainerImage = "images.jpg";

//   return (
//     <>
//       <Navbar />
//       <Institute
//         name={instituteName}
//         location={location}
//         establishedYear={establishedYear}
//       />
//       <Course coursename={coursename} duration={duration} fees={fees} />
//       <Trainer
//         image={trainerImage}
//         trainerName={trainerName}
//         designation={designation}
//         experience={experience}
//       />
//       <Batch />
//       <Footer>
//         <h2>Thank You For Visiting Our Portal</h2>
//         <p>All The Best For Your Career</p>
//       </Footer>
//     </>
//   );
// };

// export default App;

// import React from 'react'
// import List from './Renderinglist/List'

// const App = () => {
//   return <>
//   <List/>
//   </>

// }

// export default App

// import React from 'react'
// import ConditionalRendering from './Conditional rendering/ConditionalRendering'

// const App = () => {
//   return <ConditionalRendering/>
// }

// export default App

// import Events from './Events/Events'

// const App = () => {
//   return <>
//   <Events/>

//     </>
// }

// export default App

// import React from 'react'
// import Counter from './States/Counter'
// import User from './States/User'
// import Theme from './States/Theme'

// const App = () => {
//   return <>
//   {/* <Counter/> */}
//   {/* <User/> */}
//   <Theme/>
//   </>
// }

// export default App

// import React from 'react'
// import States from './usestates/States'

// const App = () => {
//   return (
//     <div><States/></div>
//   )
// }

// export default App

//!useRef
// import React from 'react'
// import Refernce from './useRef/Refernce'

// const App = () => {
//   return (
//     <div>

//       <Refernce/>
//     </div>
//   )
// }

// export default App

//!10-07-2026

// import React from 'react'
// import Memo from './useMeom/Memo'

// const App = () => {
//   return (
//     <div>
//       <Memo/>
//     </div>
//   )
// }

// export default App

//!14-07-2026
// import React, { useCallback, useState } from "react";
// import Title from "./useCallback/Title";
// import Count from "./useCallback/Count";
// import Button from "./useCallback/Button";

// const App = () => {
//   let [age, setAge] = useState(25);
//   let [salary, setSalary] = useState(100000);

//   let handelAge = useCallback(() => {
//      setAge(age + 1)
//   },[age])
//   let handelSalary = useCallback(() => {
//      setSalary(salary + 10000);
//   },[salary])
//   return (
//     <div>
//       <Title />
//       <Count text="Age" count={age} />
//       <Button fun={handelAge}>Increment Age</Button>
//       <Count text="Salary" count={salary} />
//       <Button fun={handelSalary}>Increment Salary</Button>
//     </div>
//   )
// }

// export default App;

//!15/07/2026
// import React from 'react'
// import Inline from './Inlinecss/Inline'
// import Globalcss from './Inlinecss/Globalcss'
// import "./index.css"
// const App = () => {
//   return (
//     <div>
//       <Inline/>
//       <Globalcss/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Navbar from './Add style/Navbar'

// const App = () => {
//   return (
//     <div>

// <Navbar/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import ControlledComponent from './Form Handeling/ControlledComponents'

// const App = () => {
//   return (
//     <div>
//       <ControlledComponent/>
//     </div>
//   )
// }

// export default App

//!23/07/2026
//!Axios
// import React from 'react'
// import Axios from './Axios/Axios'

// const App = () => {
//   return (
//    <Axios/>
//   )
// }

// export default App

//!24/07/2026

// import React from "react";
// import Home from "./React Router/Home";
// import About from "./React Router/About";
// import Contact from "./React Router/Contact";
// import Notfound from "./React Router/Notfound";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./React Router/Navbar";
// import "./navbar.css";
// import Student from "./React Router/Student";
// import Login from "./React Router/Login";
// import Dashboard from "./React Router/Dashboard";
// import Protectedrouter from "./React Router/Protectedrouter";
// import Profile from "./React Router/Profile";
// import Orders from "./React Router/Orders";
// import Services from "./React Router/Services";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Notfound />} />

//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/dashboard"
//           element={
//             <Protectedrouter>
//               <Dashboard />
//             </Protectedrouter>
//           }
//         >
//           <Route path="profile" element={<Profile />} />
//           <Route path="services" element={<Services />} />
//           <Route path="orders" element={<Orders />} />
//         </Route>
//         <Route path="/student/:id/:name" element={<Student />}></Route>
//       </Routes>
//     </>
//   );
// };

// export default App;

//!28/07/2026
// import React from 'react'
// import Pure from './Pure Components/Pure'
// import Regular from './Pure Components/Regular'

// const App = () => {
//   return <>
//   <Regular/>
//   <Pure/>
//   </>
// }

// export default App

//!memo()
// import React, { useState } from "react";
// import MemoComponents from "./Memo/MemoComponents";
// import Regular from "./Memo/Regular";

// const App = () => {
//   let [state, setState] = useState({
//     name: "MANIDEEP",
//   });
//   return (
//     <>
//       <MemoComponents details={state.name} />
//       <Regular details={state.name} />
//       <button onClick={() => setState({ name: "Manideep" })}>
//         Change the name
//       </button>
//     </>
//   );
// };

// export default App;

//!lazy

import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./React Router/Navbar";
import "./navbar.css";

const Home = lazy(() => import("./React Router/Home"));
const About = lazy(() => import("./React Router/About"));
const Contact = lazy(() => import("./React Router/Contact"));
const Notfound = lazy(() => import("./React Router/Notfound"));
const Student = lazy(() => import("./React Router/Student"));
const Login = lazy(() => import("./React Router/login"));
const Dashboard = lazy(() => import("./React Router/Dashboard"));
const Protectedrouter = lazy(() => import("./React Router/Protectedrouter"));
const Profile = lazy(() => import("./React Router/Profile"));
const Orders = lazy(() => import("./React Router/Orders"));
const Services = lazy(() => import("./React Router/Services"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loding Avuthundhi Raa.. Wait Chey</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Protectedrouter>
                <Dashboard />
              </Protectedrouter>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="services" element={<Services />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="/student/:id/:name" element={<Student />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
