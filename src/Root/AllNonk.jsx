import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "./Error";
import Home from "../Components/Home";
import Donation from "../Components/Donation";
import Statistics from "../Components/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children :[
        {
            path: "/",
            element:<Home></Home>
        },
        {
           path: "/Donation",
           element: <Donation></Donation>
        },
        {
            path:"/Statistics",
            element:<Statistics></Statistics>
        }
      ]
    },
    
  ]);

export default router;