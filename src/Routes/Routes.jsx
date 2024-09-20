import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About/About";
import Services from "../pages/Services/Services/Services";
import DoctorInformation from "../pages/DoctorsList/DoctorInformation/DoctorInformation";

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
                path: 'doctor/:id',
                element: <DoctorInformation></DoctorInformation>
            }
        ]
    }
])