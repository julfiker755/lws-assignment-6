import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Errorpage from "../component/Errorpage/Errorpage";
import Layout from "../component/Layout/Layout";
import Home from "../Page/Home";
import Singlepage from "../Page/Singlepage";


const routes =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                index:true,
                element:<Home></Home>,
            },{
                path:'/single/:pid',
                element:<Singlepage></Singlepage>
            }
        ]
    }
])
export default routes;