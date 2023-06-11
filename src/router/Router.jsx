import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Page404 from "../Pages/Page404/Page404";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";

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
                path:'instructors',
                element: <Instructors> </Instructors>
            },

            {
                path:'classes',
                element:<Classes> </Classes>
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