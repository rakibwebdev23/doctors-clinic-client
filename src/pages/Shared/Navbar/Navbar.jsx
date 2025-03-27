import { NavLink } from 'react-router-dom';
import { useState } from 'react';
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
            .catch(error => console.log(error));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavItem = ({ to, children, activeClassName = '', mobileFullWidth = false }) => {
        return (
            <li className={`group relative ${mobileFullWidth ? 'w-full' : ''}`}>
                <NavLink 
                    to={to}
                    className={({ isActive }) => `
                        flex items-center gap-1 
                        transition-colors duration-300 
                        ${isActive ? `text-blue-400 ${activeClassName}` : 'text-white'}
                        group-hover:text-blue-400 
                        relative
                        w-full
                        text-center
                    `}
                >
                    {children}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
            </li>
        );
    };

    const DashboardLink = ({ to, icon: Icon, label, isVisible }) => {
        if (!isVisible) return null;

        return (
            <li className="relative group">
                <NavLink 
                    to={to}
                    className={({ isActive }) => `
                        flex items-center gap-2 
                        transition-colors duration-300
                        ${isActive ? 'text-blue-400' : 'text-white'}
                        group-hover:text-blue-400
                    `}
                >
                    <Icon size={24} />
                    <span className="lg:hidden">{label}</span>
                    <div className="hidden lg:block">
                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 scale-0 group-hover:scale-100 transition-all duration-200 text-sm bg-blue-600 text-white rounded px-4 py-1 whitespace-nowrap">
                            {label}
                        </span>
                    </div>
                </NavLink>
            </li>
        );
    };

    const navLink = (
        <>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/service">Services</NavItem>
            <NavItem to="/doctors">Doctors</NavItem>
            
            <DashboardLink 
                to="/dashboard/adminHome" 
                icon={MdOutlineDashboardCustomize}
                label="Admin Dashboard"
                isVisible={user && isAdmin}
            />
            
            <DashboardLink 
                to="/dashboard/userHome" 
                icon={MdDashboard}
                label="User Dashboard"
                isVisible={user && !isAdmin}
            />
            
            {user ? (
                <NavItem 
                    to="/signin" 
                    activeClassName="text-red-400 hover:text-red-400"
                    onClick={handleLogout}
                >
                    Sign Out
                </NavItem>
            ) : (
                <NavItem 
                    to="/signin" 
                    activeClassName="text-green-400 hover:text-green-400"
                >
                    Sign In
                </NavItem>
            )}
        </>
    );

    return (
        <nav className="z-40 fixed w-full text-white bg-black/90 backdrop-blur-sm py-4 shadow-lg">
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="flex items-center justify-between">
                    <NavLink 
                        to="/" 
                        className="flex items-center"
                    >
                        <img
                            className="lg:w-12 md:w-10 w-8 transition-transform hover:rotate-12"
                            src="https://i.ibb.co.com/jMYJMMz/logo4.png"
                            alt="logo"
                        />
                        <h2 className="ml-2 text-blue-500 lg:text-lg md:text-base text-sm font-bold">
                            Doctors <span className="text-orange-500">Clinic</span>
                        </h2>
                    </NavLink>

                    {/* Mobile Dropdown Menu */}
                    <div className="lg:hidden">
                        <button
                            role="button"
                            className="btn btn-ghost bg-blue-600 rounded-full p-2 hover:bg-blue-700 transition-colors"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="h-6 w-6 text-white transition duration-300"
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
                                    className="h-6 w-6 text-white transition duration-300"
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
                            <ul className="fixed left-0 top-16 w-full bg-black/95 backdrop-blur-md py-6 space-y-4 text-center font-bold shadow-2xl animate-slide-in z-50">
                                {navLink}
                            </ul>
                        )}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex font-bold">
                        <ul className="flex items-center space-x-6">{navLink}</ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;