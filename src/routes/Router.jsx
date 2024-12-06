import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Post from "../pages/PostDetail"
import Create from "../pages/Create";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../components/Layout";


const router = createBrowserRouter([
    {path:"/", element:<Layout />,
        children:[
            {path:"/edit/:id", element:<Edit />},
            {path:"/create", element:<Create />},
            {path:"/post/:id", element:<Post />},
            {path:"/login", element:<Login />},
            {path:"/register", element:<Register />},
        ]
    },
    
]);


export default router;