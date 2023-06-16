import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Page404 from "../Pages/Page404/Page404";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivetRoutes from "./PrivetRoutes";
import ManageClasses from "../Pages/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Admin/ManageUsers/ManageUsers";
import AddAClass from "../Pages/Instructor/AddAClass/AddAClass";
import MyClasses from "../Pages/Instructor/MyClasses/MyClasses";
import UserClass from "../Pages/Users/UserClass/UserClass";
import EnrolledClass from "../Pages/Users/EnrolledClass/EnrolledClass";
import Dashboard from "../Layouts/Dashboard";
import SendFeedback from "../Pages/Admin/SendFeedback/SendFeedback";

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
                element: <Instructors> </Instructors>,
                loader: () => fetch('https://dancing-guru-server.vercel.app/instructors')
            },

            {
                path:'classes',
                element:<Classes> </Classes>,
                
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
    {
        path:'dashboard',
        element:<PrivetRoutes><Dashboard> </Dashboard></PrivetRoutes>,
        children:[
          {
            path:'home',
            element: <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl ">Welcome To Dashboard</h2>
           },

          {
            path:'manageCls',
            element:<ManageClasses> </ManageClasses>
          },
          {
            path:'manageUsers',
            element:<ManageUsers> </ManageUsers>
          },
          {
            path:'addCls',
            element:<AddAClass> </AddAClass>
          },
          {
            path:'myClasses',
            element:<MyClasses> </MyClasses>
          },
          {
            path:'userClass',
            element:<UserClass> </UserClass>
          },
          {
            path:'enrolledCls',
            element:<EnrolledClass> </EnrolledClass>
          },
          {
            path:'feedback/:id',
            element:<SendFeedback> </SendFeedback>,
            loader: ({params}) => fetch(`https://dancing-guru-server.vercel.app/classes/${params.id}`)
          }
        ]
      }
])


export default router;