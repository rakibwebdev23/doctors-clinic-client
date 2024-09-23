import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Appointment = () => {
    return (
        <div className="hero min-h-screen mt-16">
            <div className="hero-content flex-row rounded-xl bg-blue-300">
                <div className="lg:text-left md:w-1/2 pl-4">
                    <h1 className="text-5xl font-bold">Contact With Us</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex items-center gap-6 mb-2">
                        <BsTelephoneInbound className="text-4xl"></BsTelephoneInbound>
                        <p>+0143484888934 <br /> +0829497414394</p>
                    </div>
                    <div className="flex items-center gap-6 mt-2">
                        <CiLocationOn className="text-5xl"></CiLocationOn>
                        <p>Dhanmondi 17, Dhaka -1200, <br /> Bangladesh</p>
                    </div>
                </div>
                <div className="card md:w-3/4 shadow-2xl">
                    <form className="card-body">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" placeholder="Your mobile" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Doctor Name</span>
                                </label>
                                <input type="text" placeholder="Doctor name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Department</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="Your name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;