import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import { MdDashboard, MdOutlineDashboardCustomize } from 'react-icons/md';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);

            })
    }
    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        {/* {
            user && isAdmin && <li><Link to="/dashboard/adminHome"><MdOutlineDashboardCustomize></MdOutlineDashboardCustomize></Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome"><MdDashboard></MdDashboard></Link></li>
        } */}
        {
            user && isAdmin && (
                <li className="group relative">
                    <Link to="/dashboard/adminHome">
                        <MdOutlineDashboardCustomize size={24} />
                    </Link>
                    <span className="absolute left-0 top-full mt-1 w-max scale-0 rounded bg-gray-800 px-2 py-1 text-sm text-white transition-all duration-200 group-hover:scale-100">
                        Admin Dashboard
                    </span>
                </li>
            )
        }
        {
            user && !isAdmin && (
                <li className="group relative">
                    <Link to="/dashboard/userHome">
                        <MdDashboard size={24} />
                    </Link>
                    <span className="absolute left-0 top-full mt-1 w-max scale-0 rounded bg-gray-800 px-2 py-1 text-sm text-white transition-all duration-200 group-hover:scale-100">
                        User Dashboard
                    </span>
                </li>
            )
        }
        {
            user ? <>
                {/* <li><img className='rounded-full w-20' src={user?.photoURL} alt="" /></li> */}
                <li><Link onClick={handleLogout}>Sign Out</Link></li></> :
                <><li><Link to="/signin">Sign In</Link></li></>
        }

    </>

    return (
        <div className="navbar fixed z-10 max-w-screen-xl text-white px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <Link to="/" className="w-16 flex items-center">
                    <img src="https://i.ibb.co.com/jMYJMMz/logo4.png" alt="" />
                    <h2 className=' text-blue-500'><span className='font-bold'>Doctors</span> <br /><span className='text-orange-500'>Clinic</span></h2>
                </Link>
            </div>
            <div className="navbar-end max-w-screen py-1 bg-blue-600 bg-opacity-50 px-6 hidden lg:flex justify-evenly mt-4">
                <ul className="menu menu-horizontal gap-6">
                    {navLink}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;