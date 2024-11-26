import { Link } from "react-router-dom";
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
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    });

    return (
        <div>
            <div className='lg:flex lg:justify-between items-center'>
                <h2 className="text-3xl font-bold">
                    <span>Hi, Welcome </span>
                    <span className='text-green-600'>
                        {
                            user?.displayName ? user?.displayName : <Link to="/" className="btn btn-ghost ">Back</Link>
                        }
                    </span>
                </h2>
                <div className="flex items-center">
                    <div className="mt-8 lg:mt-0">
                        {user.photoURL !== null && <div className="avatar items-center flex flex-col">
                            <div className="w-24 rounded-full">
                                <img className="" src={user.photoURL} />
                            </div>
                            <h2 className="text-2xl font-bold mt-2">{user.displayName}</h2>
                        </div>}
                    </div>
                </div>
            </div>

            <div className="stats flex flex-col lg:flex-none lg:flex-row shadow w-full mt-16">
                <div className="stat bg-blue-600">
                    <div className="stat-figure text-4xl text-white">
                        <FaDollarSign></FaDollarSign>
                    </div>
                    <div className="stat-title font-bold">Revenue</div>
                    <div className="stat-value">{stats.revenue}</div>
                </div>
                <div className="stat bg-green-500">
                    <div className="stat-figure text-4xl text-white">
                        <FaUserDoctor></FaUserDoctor>
                    </div>
                    <div className="stat-title font-bold">Doctors</div>
                    <div className="stat-value">{stats.doctors}</div>
                </div>

                <div className="stat bg-orange-400">
                    <div className="stat-figure text-4xl text-white">
                        <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title font-bold">Patient's</div>
                    <div className="stat-value">{stats.patients}</div>
                </div>

                <div className="stat bg-blue-500">
                    <div className="stat-figure text-white text-4xl">
                        <FaList></FaList>
                    </div>
                    <div className="stat-title font-bold">Appointment</div>
                    <div className="stat-value">{stats.appointments}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;