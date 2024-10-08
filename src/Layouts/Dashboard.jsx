import { FaHome, FaHospitalUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAppointment from "../hooks/useAppointment";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [appointment] = useAppointment();
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-66 min-h-screen bg-green-400">
                <ul className="menu p-6 uppercase gap-4">
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

                            </> : <>
                                <li><NavLink to="/dashboard/userHome">
                                    <MdOutlineDashboardCustomize />
                                    User Home
                                </NavLink></li>
                                <li><NavLink to="/dashboard/appointment">
                                    <FaHospitalUser />
                                    My Appointment({appointment.length})
                                </NavLink></li>
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
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;