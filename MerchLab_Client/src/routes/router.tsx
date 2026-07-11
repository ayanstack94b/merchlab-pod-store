import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import MerchDetails from "../pages/MerchDetails/MerchDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddMerch from "../pages/AddMerch/AddMerch";
import ManageMerch from "../pages/ManageMerch/ManageMerch";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
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
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "dashboard/add-merch",
        element: <AddMerch />,
      },
      {
        path: "dashboard/manage-merch",
        element: <ManageMerch />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);