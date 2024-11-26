import { Link } from "react-router-dom";
import img from "../../assets/images/banner2.png";

const Banner = () => {
    return (
        <div className="relative lg:flex items-center bg-cover bg-center text-white bg-opacity-20 bg-black min-h-screen mx-auto" style={{ backgroundImage: `url("${img}")` }}>
            {/* Left Side Content */}
            <div className="flex min-h-screen">
                <div className="text-left flex flex-col p-4 lg:p-8 justify-center">
                    <h1 className="lg:text-6xl text-4xl mt-6 leading-tight font-bold mb-6 font-poppins">Your Health, <br /> <span className="md:ml-20"><span className="text-orange-600">Our</span> Priority</span></h1>
                    <p className="lg:mt-4 mt-6 leading-relaxed lg:text-justify whitespace-wrap lg:w-1/2 font-poppins text-justify ">
                        Doctors Clinic is a leading healthcare and provider dedicated to delivering high-quality medical services with a personal touch. Our team of experienced and compassionate doctors, nurses, and support staff is committed to providing comprehensive care to patients of all ages.
                    </p>
                    <Link to="/service"><button className="mt-6 px-6 py-3 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 leading-tight whitespace-nowrap">
                        All Services
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;