import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './Pages/Home/Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/Provider/AuthProvider';
import AddToy from './Pages/AddToy/AddToy';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Blogs from './Pages/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/addToy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      }
      
    ]
    
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
