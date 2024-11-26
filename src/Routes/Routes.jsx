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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../pages/Dashboard/ManageDoctor/ManageDoctor";
import UpdateDoctor from "../pages/Dashboard/UpdateDoctor/UpdateDoctor";
import Payment from "../pages/Dashboard/PaymentSystem/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentSystem/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Appointment from "../pages/Shared/Appointment/Appointment";
import AllContact from "../pages/Dashboard/AllContact/AllContact";
import Review from "../pages/Dashboard/Review/Review";

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
                loader: ({ params }) => fetch(`http://localhost:5000/doctors/${params.id}`)
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/appointmentContact",
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: "appointment",
                element: <DoctorAppointment></DoctorAppointment>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "review",
                element: <Review></Review>
            },

            // admin routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "addDoctor",
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: "manageDoctor",
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path: "appointmentContact", 
                element: <AdminRoute><AllContact></AllContact></AdminRoute>
            },
            {
                path: "updateDoctor/:id",
                element: <AdminRoute><UpdateDoctor></UpdateDoctor></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctors/${params.id}`)
            }
        ]
    }
])