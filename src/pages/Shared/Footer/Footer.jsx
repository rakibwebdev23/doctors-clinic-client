import { Link } from "react-router-dom";
import img from "../../../assets/images/foter.jpg";

const Footer = () => {
    return (
        <div className="mt-10">
            <footer
                className="text-white lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="container mx-auto p-6 lg:p-12 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 bg-black bg-opacity-80 max-w-full">
                    <div>
                        <img
                            className="lg:w-20 w-12 mb-4"
                            src="https://i.ibb.co.com/jMYJMMz/logo4.png"
                            alt="Doctors Clinic Logo"
                        />
                        <p>
                            <span className="lg:text-xl font-bold text-blue-500">
                                Doctors <span className="text-orange-500">Clinic</span>
                            </span>
                            <br />
                            <small className="text-gray-300">Providing reliable health services since 1992</small>
                        </p>
                    </div>
                    <div className="font-semibold">
                        <h6 className="lg:text-lg font-semibold mb-4 text-orange-500 uppercase">Services</h6>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition">Branding</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Design</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Marketing</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Advertisement</a></li>
                        </ul>
                    </div>
                    <div className="font-semibold">
                        <h6 className="lg:text-lg font-semibold mb-4 text-orange-500 uppercase">Company</h6>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-blue-400 transition">About us</Link></li>
                            <li><Link to="/appointmentContact" className="hover:text-blue-400 transition">Contact</Link></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Jobs</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Press kit</a></li>
                        </ul>
                    </div>
                    <div className="font-semibold">
                        <h6 className="lg:text-lg font-semibold mb-4 text-orange-500 uppercase">Legal</h6>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition">Terms of use</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Cookie policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-black bg-opacity-80 text-center p-4">
                    <p className="text-gray-300 text-sm">
                        &copy; {new Date().getFullYear()} Doctors Clinic. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
