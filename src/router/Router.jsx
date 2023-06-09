import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Page404 from "../Pages/Page404/Page404";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement:<Page404> </Page404>,
        element: <MainLayout> </MainLayout>,
        children:[
            {
                path:'/',
                element:<Home> </Home>
            },
            {
                path:'home',
                element:<Home> </Home>
            },

            {
                path:'contact',
                element:<Contact> </Contact>
            },

            {
                path:'about',
                element:<About> </About>
            },

            {
                path:'register',
                element:<Register> </Register>
            },

            {
                path:'login',
                element:<Login> </Login>
            }

        ],
    },
])


export default router;