import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubLoader } from './Components/GitHub/Github.jsx'


// method 1 =>
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout/>,
//     children: [
//     {  path : "",
//        element : <Home/>
//     },

//     {
//       path : "about",
//       element : <About/>
//     },

//     {
//       path : "contact",
//       element : <Contact/>
//     }
//     ]
//   }
// ])

// method 2 =>

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= "/" element = {<Layout/>}>
      <Route path= "" element = {<Home/>} />
      <Route path= "about" element = {<About/>} />
      <Route path= "contact" element = {<Contact/>} />
      <Route path= "user/:userId" element = {<User/>} />
      <Route
       path= "github" 
       element = {<Github/>} 
       loader={githubLoader}
       />

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
