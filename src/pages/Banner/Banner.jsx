import { Link } from "react-router-dom";
import img from "../../assets/images/banner2.png";

const Banner = () => {
    return (
        <div className="relative md:flex items-center h-[700px] bg-cover bg-center p-8 text-white bg-opacity-20 bg-black" style={{ backgroundImage: `url("${img}")` }}>
            {/* Left Side Content */}
            <div className="text-left flex flex-col justify-center">
                <h1 className="text-6xl font-bold mb-8 max-w-lg">Your Health, <br /> <span className="md:ml-20"><span className="text-orange-600">Our</span> Priority</span></h1>
                <p className="mt-4 text-lg text-balance max-w-xl">
                    Doctors Clinic is a leading healthcare provider dedicated to delivering high-quality medical services with a personal touch. Our team of experienced and compassionate doctors, nurses, and support staff is committed to providing comprehensive care to patients of all ages.
                </p>
                <Link to="/service"><button className="mt-6 px-2 w-36 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500 zoom transition-transform duration-150 hover:scale-110">
                    All Services
                </button></Link>
            </div>
        </div>
    );
};

export default Banner;