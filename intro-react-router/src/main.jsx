import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import User from './components/User.jsx';
import UserFullInfo from './components/UserFullInfo.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <App></App>
//   },
//   {
//     path:'/contact',
//     element: <Contact></Contact>
//   }, 
//   {
//     path:'/about',
//     element: <About></About>
//   }, 
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      
      {
        path: 'user',
        element: <User></User>,
        loader: () =>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'user/:userId',
        element: <UserFullInfo></UserFullInfo>
        
      },
      {
        path: 'about',
        element: <About></About>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
