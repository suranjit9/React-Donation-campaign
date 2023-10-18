import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "./Error";
import Home from "../Components/Home";
import Donation from "../Components/Donation";
import Statistics from "../Components/Statistics";
import CardDetals from "../Components/Cads/CardDetals";

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
           element: <Donation></Donation>,
           loader:()=> fetch('/public/Data.json'),
        },
        {
            path:"/Statistics",
            element:<Statistics></Statistics>,
        },
        {
            path:'/card/:id',
            element:<CardDetals></CardDetals>,
            loader:()=> fetch('/public/Data.json'),
        }
      ]
    },
    
  ]);

export default router;