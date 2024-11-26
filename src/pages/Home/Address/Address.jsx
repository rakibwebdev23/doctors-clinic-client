import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";

const Address = () => {
    return (
        <div className="flex justify-center flex-col px-4">
            <div className="lg:flex items-center mx-auto space-y-10 lg:space-y-0 lg:justify-around lg:my-24 my-16 gap-10 w-full h-full">
                <div className="card bg-blue-600 text-neutral-content lg:w-72 w-full zoom transition-transform duration-200 hover:scale-y-110 lg:hover:scale-110">
                    <div className="card-body items-center text-left">
                        <div className="flex items-center gap-2">
                            <LuClock4 className="text-6xl"></LuClock4>
                            <div>
                                <h2 className="card-title">Opening Hours</h2>
                                <small>24 hours open <br />Everyday</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-orange-600 text-neutral-content lg:w-72 zoom transition-transform duration-200 hover:scale-y-110 lg:hover:scale-110">
                    <div className="card-body items-center text-left ">
                        <div className="flex items-center gap-2">
                            <CiLocationOn className="text-6xl"></CiLocationOn>
                            <div>
                                <h2 className="card-title">Our Location</h2>
                                <small>Dhaka -1200, <br /> Bangladesh</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-blue-600 text-neutral-content lg:w-72 zoom transition-transform duration-200 hover:scale-y-110 lg:hover:scale-110">
                    <div className="card-body items-center text-left">
                        <div className="flex items-center gap-3">
                            <BsTelephoneInbound className="text-5xl"></BsTelephoneInbound>
                            <div>
                                <h2 className="card-title">Contact Us</h2>
                                <small>+0143484888934 <br /> +0829497414394</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;