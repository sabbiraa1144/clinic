import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Users from "../pages/Users/Users";
import Doctors from "../pages/Doctors/Doctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<h2>page not found</h2>,
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
        path:'/user',
        element:<Users></Users>,
        loader:()=>fetch('http://localhost:3000/users')
      },
      {
        path:'/doctors',
        element:<Doctors></Doctors>
      }
    ]
  },
]);

export default router;