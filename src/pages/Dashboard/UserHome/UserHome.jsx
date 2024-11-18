import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl font-bold">
                <span>Hi, Welcome</span>
                <span className='text-green-600'>
                    {
                        user?.displayName ? user?.displayName : <Link to="/" className="btn btn-ghost ">Back</Link>
                    }
                </span>
            </h2>
        </div>
    );
};

export default UserHome;