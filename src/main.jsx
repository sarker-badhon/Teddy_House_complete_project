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
import DetailsView from './Pages/DetailsView/DetailsView';
import AllToys from './Pages/AllToys/AllToys';
import ToyBookings from './Pages/ToyBookings/ToyBookings';
import ToysDetails from './Pages/ToysDetails/ToysDetails';
import MyToy from './Pages/MyToy/MyToy';
import UpdateToy from './Pages/UpdateToy/UpdateToy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/detailView',
        element: <PrivateRoute>
          <DetailsView></DetailsView>
        </PrivateRoute>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toybook',
        element: <ToyBookings></ToyBookings>
      },
      {
        path: 'toysdetails/:id',
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://new-teddy-bear-server.vercel.app/toysdetails/${params.id}`) 
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,

      },
      {
        path: '/UpdateToy/:id',
        element: <UpdateToy></UpdateToy>
      },

      {
        path: '/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      }

    ]

  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
