import { Link } from "react-router-dom";
import img from "../../../assets/images/foter.jpg";

const Footer = () => {

    return (
        <div className="mt-10">
            <footer className="text-white lg:h-full" style={{
                backgroundImage: `url(${img})`,
            }}>
                <div className="footer p-8">
                    <aside>
                        <img className="w-24" src="https://i.ibb.co.com/jMYJMMz/logo4.png" alt="" />
                        <p>

                            <span className="text-xl font-bold text-blue-500">Doctors <span className="text-orange-500">Clinic</span></span>
                            <br />
                            <small>Providing reliable tech since 1992</small>
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link to="/about" className="link link-hover">About us</Link>
                        <Link to="/appointmentContact" className="link link-hover">Contact</Link>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
                <div className=" bg-black bg-opacity-30 p-4 text-center">
                    <aside>
                        <p className="text-black font-semibold">Copyright © {new Date().getFullYear()} - All right reserved by <span>Doctors Clinic</span></p>
                    </aside>
                </div>
            </footer>
        </div>
    );
};

export default Footer;