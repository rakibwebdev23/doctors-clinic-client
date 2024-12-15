import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
import { MdDashboard, MdOutlineDashboardCustomize } from 'react-icons/md';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLink = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            {
                user && isAdmin && (
                    <li className="group relative">
                        <Link to="/dashboard/adminHome">
                            <MdOutlineDashboardCustomize size={24} />
                        </Link>
                        <span className="absolute left-0 top-full mt-6 w-max scale-0 rounded bg-blue-600 px-2 py-1 text-sm text-white transition-all duration-200 group-hover:scale-100">
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
                        <span className="absolute left-0 top-full mt-6 w-max scale-0 rounded bg-blue-600 px-2 py-1 text-sm text-white transition-all duration-200 group-hover:scale-100">
                            User Dashboard
                        </span>
                    </li>
                )
            }
            {
                user ? (
                    <li><Link onClick={handleLogout}>Sign Out</Link></li>
                ) : (
                    <li><Link to="/signin">Sign In</Link></li>
                )
            }
        </>
    );

    return (
        <div className="navbar max-w-screen-xl fixed z-10 text-white bg-black bg-opacity-90 py-3 px-4">
            <div className="navbar-start">
                <Link to="/" className="flex items-center">
                    <img className="w-12" src="https://i.ibb.co.com/jMYJMMz/logo4.png" alt="logo" />
                    <h2 className="ml-2 text-blue-500 text-lg">
                        <span className="font-bold">Doctors </span>
                        <span className="text-orange-500">Clinic</span>
                    </h2>
                </Link>
            </div>

            {/* Dropdown menu */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-orange-500 transition duration-300"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-500 hover:text-orange-500 transition duration-300"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                    {isMenuOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content right-0 bg-base-100 rounded-box z-[1] w-40 p-2 mt-2 font-bold shadow text-black"
                        >
                            {navLink}
                        </ul>
                    )}
                </div>
            </div>

            {/* Desktop menu */}
            <div className="navbar-end hidden lg:flex font-semibold">
                <ul className="menu menu-horizontal">{navLink}</ul>
            </div>
        </div>
    );
};

export default Navbar;