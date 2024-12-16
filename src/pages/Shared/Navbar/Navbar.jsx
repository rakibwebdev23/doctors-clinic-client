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
            .then(() => {})
            .catch(error => console.log(error));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLink = (
        <>
            <li className="whitespace-nowrap">
                <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            </li>
            <li className="whitespace-nowrap">
                <Link to="/about" className="hover:text-orange-500 transition">About</Link>
            </li>
            <li className="whitespace-nowrap">
                <Link to="/service" className="hover:text-orange-500 transition">Services</Link>
            </li>
            <li className="whitespace-nowrap">
                <Link to="/doctors" className="hover:text-orange-500 transition">Doctors</Link>
            </li>
            {user && isAdmin && (
                <li className="relative group whitespace-nowrap">
                    <Link to="/dashboard/adminHome" className="flex justify-center">
                        <MdOutlineDashboardCustomize size={24} />
                    </Link>
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 scale-0 group-hover:scale-100 transition-all duration-200 text-sm bg-blue-600 text-white rounded px-6 py-1">
                        Admin Dashboard
                    </span>
                </li>
            )}
            {user && !isAdmin && (
                <li className="relative group whitespace-nowrap">
                    <Link to="/dashboard/userHome" className="flex justify-center">
                        <MdDashboard size={24} />
                    </Link>
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 scale-0 group-hover:scale-100 transition-all duration-200 text-sm bg-blue-600 text-white rounded px-6 py-1">
                        User Dashboard
                    </span>
                </li>
            )}
            {user ? (
                <li className="whitespace-nowrap">
                    <Link onClick={handleLogout} className="hover:text-orange-500 transition">
                        Sign Out
                    </Link>
                </li>
            ) : (
                <li className="whitespace-nowrap">
                    <Link to="/signin" className="hover:text-orange-500 transition">
                        Sign In
                    </Link>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar max-w-screen-xl mx-auto fixed z-40 text-white bg-black bg-opacity-90 py-3 px-4">
            <div className="navbar-start">
                <Link to="/" className="flex items-center">
                    <img
                        className="lg:w-12 md:w-10 w-8"
                        src="https://i.ibb.co.com/jMYJMMz/logo4.png"
                        alt="logo"
                    />
                    <h2 className="ml-2 text-blue-500 lg:text-lg md:text-base text-sm font-bold">
                        Doctors <span className="text-orange-500">Clinic</span>
                    </h2>
                </Link>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="navbar-end lg:hidden">
                <button
                    role="button"
                    className="btn btn-ghost"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg
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
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <ul className="absolute left-0 top-full w-full bg-black bg-opacity-95 py-4 space-y-2 text-center font-semibold shadow-lg transition-all duration-300">
                        {navLink}
                    </ul>
                )}
            </div>

            {/* Desktop Menu */}
            <div className="navbar-end hidden lg:flex font-semibold">
                <ul className="menu menu-horizontal space-x-4">{navLink}</ul>
            </div>
        </div>
    );
};

export default Navbar;
