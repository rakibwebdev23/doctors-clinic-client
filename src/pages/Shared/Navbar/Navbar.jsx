import { Link } from 'react-router-dom';
import logo from "../../../../public/logo4.png"

const Navbar = () => {

    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Our Services</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 max-w-screen-xl text-white bg-opacity-20 bg-black">
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
                    <img src={logo} alt="" />
                    <h2 className=' text-blue-500'><span className='font-bold'>Doctors</span> <br /><span className='text-orange-500'>Clinic</span></h2>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

export default Navbar;