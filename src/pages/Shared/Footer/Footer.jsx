import img from "../../../assets/images/foter.jpg";

const Footer = () => {

    return (
        <footer className="text-white" style={{
            backgroundImage: `url(${img})`,
        }}>
            <div className="footer mt-10 p-10">
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
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
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
            <footer className="footer footer-center bg-black bg-opacity-30 p-4 text-gray-200">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span>Doctors Clinic</span></p>
                </aside>
            </footer>
        </footer>
    );
};

export default Footer;