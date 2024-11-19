import { Link } from "react-router-dom";
import img2 from "../../../../assets/images/medical1.jpg";
import img1 from "../../../../assets/images/medical4.jpg";

const AboutInfo = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row pt-16">
                <div className="md:w-1/2 relative">
                    <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img2} className="w-1/2 right-5 top-1/2 absolute rounded-lg shadow-2xl border-solid border-8 border-white" />
                </div>
                <div className="lg:w-1/2 space-y-6 pl-6">
                    <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
                    <h1 className="text-6xl font-bold">Expert Care, Trusted Service</h1>
                    <p className="text-balance text-lg">Doctors Clinic is a leading healthcare provider dedicated to delivering high-quality medical services with a personal touch. Our team of experienced and compassionate doctors, nurses, and support staff is committed to providing comprehensive care to patients of all ages.
                        We understand that every patient is unique, and our approach is centered around personalized treatment plans that cater to individual needs. Whether you need routine check-ups, specialized care, or emergency services, we are here to ensure your health and well-being.
                    </p>
                    <Link to="/about"><button className="mt-6 px-2 w-36 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500 zoom transition-transform duration-200 hover:scale-125">
                        Get More Info
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutInfo;