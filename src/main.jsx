import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Navbar/Home/Home';
import About from './components/About/About';

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home></Home>,
        children:[
        { path:'/about',
          element: <About></About>
        }
        ]
      },
    ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
