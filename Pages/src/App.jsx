import { useState } from 'react'
import './App.css'
import MyNavbar from './components/myNavbar'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import PhotosReviews from './components/PhotosReviews'
import Services from './components/Services'
import Contact from './components/Contact'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Login/></>
    },
    {
      path:'/Home',
      element:<><MyNavbar/><Home/></>
    },
    {
      path:'/PhotosReviews',
      element:<><MyNavbar/><PhotosReviews/></>
    },
    {
      path:'/services',
      element:<><MyNavbar/><Services/></>
    },
    {
      path:'/contact',
      element:<><MyNavbar/><Contact/></>
    },
    {
      path:'/Register',
      element:<><Register/></>
    }
    // {
    //   path:'/Services',
    //   element: <><MyNavbar/><Services/></>
    // },
  ])

  return (
    <>
          <RouterProvider router={router}/>
    </>
  )
}

export default App
