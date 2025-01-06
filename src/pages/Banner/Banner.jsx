import { Link } from "react-router-dom";
import img from "../../assets/images/banner2.png";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center lg:justify-start text-white"
            style={{ backgroundImage: `url("${img}")` }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left lg:ml-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-poppins">
                            Your Health, <br />
                            <span className="text-orange-500">Our</span>{" "}
                            <span>Priority</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 lg:w-3/4 font-poppins lg:text-justify lg:hyphens-auto">
                            Doctors Clinic is a trusted healthcare provider dedicated to
                            delivering high-quality medical services with a personal
                            touch. Our experienced doctors and staff ensure comprehensive
                            care for patients of all ages.
                        </p>
                        <Link to="/service">
                            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded-lg transition duration-300 ease-in-out shadow-md">
                                All Services
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
