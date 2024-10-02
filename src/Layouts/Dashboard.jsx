import { FaHome, FaHospitalUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAppointment from "../hooks/useAppointment";

const Dashboard = () => {
    const [appointment] = useAppointment();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-66 min-h-screen bg-green-400">
                <ul className="menu p-6 uppercase gap-4">
                    <li><NavLink to="/dashboard/userHome">
                        <MdOutlineDashboardCustomize />
                        Dashboard
                    </NavLink></li>
                    <li><NavLink to="/dashboard/allUser">
                        <FaHospitalUser />
                        All User ({appointment.length})
                    </NavLink></li>
                    <li><NavLink to="/dashboard/addDoctor">
                        <FaUserDoctor />
                        Add a Doctor
                    </NavLink></li>
                    <li><NavLink to="/dashboard/manageDoctor">
                        <FaUserDoctor />
                        Manage Doctor
                    </NavLink></li>
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