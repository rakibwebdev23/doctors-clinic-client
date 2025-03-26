import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserDoctor } from "react-icons/fa6";
import { FaDollarSign, FaList, FaUsers } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    return (
        <div className="container mx-auto">
            <div className="lg:flex lg:justify-between lg:items-center mb-10 flex-col lg:flex-row">
                <h2 className="text-3xl font-bold text-center lg:text-left text-gray-700">
                    Hi, Welcome{" "}
                </h2>

                <div className="flex items-center justify-center mt-6 lg:mt-0">
                    {user.photoURL && (
                        <div className="avatar flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                                <img src={user.photoURL} alt="User Profile" />
                            </div>
                            <h2 className="text-xl font-semibold text-green-600">{user.displayName}</h2>
                        </div>
                    )}
                </div>
            </div>

            <div className="stats flex flex-col lg:flex-none lg:flex-row shadow max-w-full mt-16 gap-6 p-4">
                <div className="stat card bg-blue-600 text-white p-6 rounded-lg shadow-md">
                    <div className="stat-figure text-4xl mb-4">
                        <FaDollarSign />
                    </div>
                    <div className="stat-title font-semibold text-lg text-black">Revenue</div>
                    <div className="stat-value text-2xl">{stats.revenue}</div>
                </div>
                <div className="stat card bg-green-500 text-white p-6 rounded-lg shadow-md">
                    <div className="stat-figure text-4xl mb-4">
                        <FaUserDoctor />
                    </div>
                    <div className="stat-title font-semibold text-lg text-black">Doctors</div>
                    <div className="stat-value text-2xl">{stats.doctors}</div>
                </div>
                <div className="stat card bg-orange-400 text-white p-6 rounded-lg shadow-md">
                    <div className="stat-figure text-4xl mb-4">
                        <FaUsers />
                    </div>
                    <div className="stat-title font-semibold text-lg text-black">Patients</div>
                    <div className="stat-value text-2xl">{stats.patients}</div>
                </div>
                <div className="stat card bg-blue-500 text-white p-6 rounded-lg shadow-md">
                    <div className="stat-figure text-4xl mb-4">
                        <FaList />
                    </div>
                    <div className="stat-title font-semibold text-lg text-black">Appointments</div>
                    <div className="stat-value text-2xl">{stats.appointments}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
