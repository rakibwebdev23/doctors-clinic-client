import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About/About";
import Services from "../pages/Services/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Doctors from "../pages/DoctorsList/Doctors/Doctors";
import Dashboard from "../Layouts/Dashboard";
import DoctorAppointment from "../pages/Dashboard/DoctorAppointment/DoctorAppointment";
import DoctorProfileView from "../pages/DoctorsList/Doctors/DoctorProfileView/DoctorProfileView";

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
                path: "/doctors/:id",
                element: <DoctorProfileView></DoctorProfileView>,
                loader: ({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
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
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "appointment",
                element: <DoctorAppointment></DoctorAppointment>
            }
        ]
    }
])