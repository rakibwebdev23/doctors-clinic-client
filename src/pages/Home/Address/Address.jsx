import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuClock4 } from "react-icons/lu";

const Address = () => {
    return (
        <div className="md:flex items-center justify-between gap-6 my-32">
            <div className="card bg-blue-900  text-neutral-content w-80">
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
            <div className="card bg-orange-400 text-neutral-content w-80">
                <div className="card-body items-center text-left">
                    <div className="flex items-center gap-2">
                        <CiLocationOn className="text-6xl"></CiLocationOn>
                        <div>
                            <h2 className="card-title">Our Location</h2>
                            <small>Dhanmondi 17, Dhaka -1200, <br /> Bangladesh</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-blue-900 text-neutral-content w-80">
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
    );
};

export default Address;