import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './routes/root.jsx'
import About from './routes/about.jsx'
import './index.css'
import Center from './routes/center.jsx'
import Contact from './routes/contact.jsx'
import Single,{loader as singleLoader}from './routes/single.jsx'
import Cart from './routes/cart.jsx'
import store from './app/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/about',
        element : <About/>
      },
      
        {
          path:'/home',
          element : <Center/>
        },
        {
          path:'/',
          element : <Center/>
        },
        {
          path:'/contact',
          element : <Contact/>
        },
        {
          path:'/product/:pid',
          element : <Single/>,
          loader : singleLoader,
        },
        {
          path : '/cart',
          element : <Cart/>
        }
      

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
        <RouterProvider router={router} />
    </Provider>


</React.StrictMode>,
)
