import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-66 min-h-screen bg-green-400">
                <ul className="menu p-6 uppercase gap-4">
                    <li><NavLink to="/dashboard/userHome">
                        User Home
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