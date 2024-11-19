import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FaCartPlus, FaCcMastercard, FaDollarSign, FaUserDoctor } from 'react-icons/fa6';
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
        <div>
            <div className='flex justify-between items-center'>
                <h2 className="text-3xl font-bold">
                    <span>Hi, Welcome </span>
                    <span className='text-green-600'>
                        {
                            user?.displayName ? user?.displayName : <Link to="/" className="btn btn-ghost ">Back</Link>
                        }
                    </span>
                </h2>
                <div className="flex items-center">
                    <div className="">
                        {user.photoURL !== null && <div className="avatar items-center flex flex-col">
                            <div className="w-32 rounded-full">
                                <img className="" src={user.photoURL} />
                            </div>
                            <h2 className="text-2xl font-bold mt-2">{user.displayName}</h2>  
                        </div>}
                    </div>
                </div>
            </div>
            <div className="stats shadow-transparent mt-10 w-full">
                <div className="stat bg-green-500">
                    <div className="stat-figure text-white">
                        <FaDollarSign className="text-4xl"></FaDollarSign>
                    </div>
                    <div className="stat-title font-bold">Total Paid Amount</div>
                    <div className="stat-value">$ {appointments}</div>
                </div>
                <div className="stat bg-green-400">
                    <div className="stat-figure text-green-600">
                        <FaUserDoctor size={32}></FaUserDoctor>
                    </div>
                    <div className="stat-title font-bold ">Total Appointment</div>
                    <div className="stat-value">{stats.length}</div>
                </div>

                <div className="stat bg-green-300">
                    <div className="stat-figure text-gray-600">
                        <FaCcMastercard className="text-4xl"></FaCcMastercard >
                    </div>
                    <div className="stat-title font-bold">Total Payment</div>
                    <div className="stat-value">{stats.length}</div>
                </div>
            </div>

        </div>
    );
};

export default UserHome;