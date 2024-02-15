import App from "@/App";
import Admin from "@/layouts/Admin";
import About from "@/pages/About";
import AddService from "@/pages/Admin/AddService";
import Dashboard from "@/pages/Admin/Dashboard";
import ServiceList from "@/pages/Admin/ServiceList";
import Hero from "@/pages/Hero";
import Home from "@/pages/Home";
import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        {
            index :  true,
            element : <Home />
        },
        {
            path :  'about',
            element : <About />
        },
        

      ]
    },
    {
      path: "/admin",
      element: <Admin />,
      children : [
        {
          index : true,
          element : <Navigate to="/admin/dashboard" />
        },
        {
            path :  'dashboard',
            element : <Dashboard />
        },
        {
            path :  'services',
            element : <AddService></AddService>
        },
        {
            path :  'service-list',
            element : <ServiceList />
        },

      ]
    },
    {
      path : 'hero',
      element : <Hero></Hero>
    }
  ]);
  export default router;