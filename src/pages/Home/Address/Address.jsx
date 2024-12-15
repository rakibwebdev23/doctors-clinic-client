import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";

const Address = () => {
    return (
        <div className="py-12 px-4 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-evenly gap-8">
                    {/* Card Component */}
                    <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                            <LuClock4 className="text-5xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Opening Hours</h3>
                        <p className="text-gray-600 leading-relaxed">
                            24 hours open <br /> Everyday
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                            <CiLocationOn className="text-5xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Dhaka -1200, <br /> Bangladesh
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                            <BsTelephoneInbound className="text-5xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h3>
                        <p className="text-gray-600 leading-relaxed">
                            +01307236959 <br /> +08294974143
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
