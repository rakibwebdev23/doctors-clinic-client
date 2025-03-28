import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaCcMastercard, FaDollarSign, FaUserDoctor } from 'react-icons/fa6';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });

    const appointments = stats.reduce((total, appoint) => total + appoint.visitFee, 0);

    return (
        <div className="container mx-auto">
            <div className="lg:flex lg:justify-between items-center mb-8 flex-col lg:flex-row">
                <h2 className="text-3xl font-bold text-center lg:text-left">
                    <span className='text-gray-700'>Hi, Welcome </span>
                </h2>

                <div className="flex items-center justify-center mt-6 lg:mt-0">
                    {user.photoURL && (
                        <div className="avatar flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                                <img src={user.photoURL} alt="User Profile" />
                            </div>
                            <h2 className="text-2xl font-bold text-green-600">{user.displayName}</h2>
                        </div>
                    )}
                </div>
            </div>

            <div className="stats flex flex-col lg:flex-none lg:flex-row shadow max-w-full mt-16 gap-6 p-4">
                <div className="stat card bg-green-500 text-white p-6 rounded-lg shadow-md">
                    <div className="stat-figure text-4xl mb-4">
                        <FaDollarSign />
                    </div>
                    <div className="stat-title font-bold">Total Paid</div>
                    <div className="stat-value text-2xl">${appointments}</div>
                </div>
                <div className="stat card bg-green-400 text-white p-6 rounded-lg shadow-md">
                    <div className="stat-figure text-4xl mb-4">
                        <FaUserDoctor />
                    </div>
                    <div className="stat-title font-bold">Appointments</div>
                    <div className="stat-value text-2xl">{stats.length}</div>
                </div>
                <div className="stat card bg-green-300 text-white p-6 rounded-lg shadow-md">
                    <div className="stat-figure text-4xl mb-4">
                        <FaCcMastercard />
                    </div>
                    <div className="stat-title font-bold">Payments</div>
                    <div className="stat-value text-2xl">{stats.length}</div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
