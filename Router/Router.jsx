import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../src/Components/Layout/Main";
import Home from "../src/Components/Pages/Home/Home/Home";
import Dishes1 from "../src/Components/Pages/DishPages/Dishes1/Dishes1";
import Order from "../src/Components/Pages/OrderPages/Order/Order";
import Login from "../src/Components/Pages/Login/Login";
import Register from "../src/Components/Pages/Register/Register";



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
          path: 'dish1',
          element: <Dishes1></Dishes1>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'registration',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;