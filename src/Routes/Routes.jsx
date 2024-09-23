import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About/About";
import Services from "../pages/Services/Services/Services";
import DoctorInformation from "../pages/DoctorsList/DoctorInformation/DoctorInformation";
import Doctors from "../pages/DoctorsList/Doctors/Doctors";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/service",
                element: <Services></Services>
            },
            {
                path: "/doctors",
                element: <Doctors></Doctors>,
            },
            {
                path: '/doctors/:id',
                element: <DoctorInformation></DoctorInformation>,
                // loader: () => fetch("doctorsList.json")
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            }
        ]
    }
])