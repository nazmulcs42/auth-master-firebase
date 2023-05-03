import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home';
import Main from './layout/Main/Main';
import Register from './components/Auth/Register/Register';
import AuthProviders from './providers/AuthProviders';
import Profile from './components/Profile/Profile';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className=' grid gap-4 place-content-center h-56'>
    <div className="radial-progress bg-[#e11d48] text-primary-content border-4 border-[#e11d48]" style={{"--value":70}}>Error</div>
    <div className='text-xl'>Opps! something went wrong.</div>
  </div>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>

      },
      {
        path: "*",
        element: <div className=' grid gap-4 place-content-center h-56'>
          <div className="radial-progress bg-[#e11d48] text-primary-content border-4 border-[#e11d48]" style={{"--value":70}}>404!</div>
          <div className='text-xl'>Page Not Found.</div>
        </div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
