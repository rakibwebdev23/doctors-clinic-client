import logo from "../../../../public/logo4.png"

const Footer = () => {

    return (
        <footer className="footer mt-10 bg-base-200 text-base-content p-10">
            <aside>
                <img className="w-24" src={logo} alt="" />
                <p>
                    
                    <span className="text-xl font-bold text-orange-500">Doctors Clinic</span>
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
        </footer>
    );
};

export default Footer;