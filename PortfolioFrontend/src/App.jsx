//import { useState } from 'react'
import './App.css'

// React Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// Page Imports
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/Portfolio",
    element: <Portfolio/>,
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
