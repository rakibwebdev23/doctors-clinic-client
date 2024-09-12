import "../Banner/Banner.css"

const Banner = () => {
    return (
        <div
            className="banner relative md:flex items-center h-[700px] bg-cover bg-center p-8 text-white bg-opacity-20 bg-black">
            {/* Left Side Content */}
            <div className="text-left flex flex-col justify-center">
                <h1 className="text-6xl font-bold mb-8 max-w-lg">Your Health, <br /> <span className="md:ml-20"><span className="text-orange-500">Our</span> Priority</span></h1>
                <p className="mt-4 text-lg text-balance max-w-xl">
                Doctors Clinic is a leading healthcare provider dedicated to delivering high-quality medical services with a personal touch. Our team of experienced and compassionate doctors, nurses, and support staff is committed to providing comprehensive care to patients of all ages.
                </p>
                <button className="mt-6 px-2 w-36 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-400">
                    All Services
                </button>
            </div>
        </div>
    );
};

export default Banner;