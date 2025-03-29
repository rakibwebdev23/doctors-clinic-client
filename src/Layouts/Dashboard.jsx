import { FaHome, FaHospitalUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineDashboardCustomize, MdRateReview } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAppointment from "../hooks/useAppointment";
import useAdmin from "../hooks/useAdmin";
import HelmetProvide from "../component/HelmetProvide";
import Container from "../component/Container/Container";

const Dashboard = () => {
    const [appointment] = useAppointment();
    const [isAdmin] = useAdmin();
    return (
        <Container>
            <HelmetProvide helmetTitle="Dashboard"></HelmetProvide>
            <div className="lg:flex">
                {/* dashboard sidebar */}
                <div className="w-66 lg:min-h-screen bg-green-400 text-black">
                    <ul className="menu p-6 uppercase gap-4 font-semibold">
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to="/dashboard/adminHome">
                                        <MdOutlineDashboardCustomize />
                                        Admin Home
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/addDoctor">
                                        <FaUserDoctor />
                                        Add a Doctor
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/manageDoctor">
                                        <FaUserDoctor />
                                        Manage Doctor
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/allUsers">
                                        <FaHospitalUser />
                                        All Users
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/appointmentContact">
                                        <FaHospitalUser />
                                        All Contact
                                    </NavLink></li>

                                </> : <>
                                    <li><NavLink to="/dashboard/userHome">
                                        <MdOutlineDashboardCustomize />
                                        User Home
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/appointment">
                                        <FaHospitalUser />
                                        My Appointment({appointment.length})
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/paymentHistory">
                                        <FaHospitalUser />
                                        Payment History
                                    </NavLink></li>
                                    <li><NavLink to="/dashboard/review"><MdRateReview></MdRateReview>Add Review</NavLink></li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink></li>
                        <li><NavLink to="/doctors">
                            <FaUserDoctor />
                            Our Doctors
                        </NavLink></li>
                    </ul>

                </div>
                {/* dashboard contet  */}
                <div className="flex-1 p-10 bg-white">

                    <Outlet></Outlet>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;