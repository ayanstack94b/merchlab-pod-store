import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import MerchDetails from "../pages/MerchDetails/MerchDetails";

import AddMerch from "../pages/AddMerch/AddMerch";
import ManageMerch from "../pages/ManageMerch/ManageMerch";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <MerchDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "items/add",
        element: (
          <PrivateRoute>
            <AddMerch />
          </PrivateRoute>
        ),
      },
      {
        path: "items/manage",
        element: (
          <PrivateRoute>
            <ManageMerch />
          </PrivateRoute>
        ),
      },
    ],
  },
]);