import { useForm } from "react-hook-form";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import img from "../../../assets/images/contact.jpg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Appointment = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            doctorName: data.doctorName,
            department: data.department,
            date: data.date
        };
        const res = await axiosSecure.post("/appointmentContact", userInfo);
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Contact Information has been submitted",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
            navigate("/");
        }
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
            <div
                className="hero mt-12 rounded-xl bg-fixed h-full"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="hero-overlay bg-black bg-opacity-60 rounded-xl"></div>
                <div className="hero-content flex flex-col lg:flex-row gap-12 p-8 lg:p-16">
                    {/* Left Section */}
                    <div className="lg:w-1/2 text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400 mb-6">
                            Contact With Us
                        </h1>
                        <p className="text-sm md:text-lg leading-relaxed mb-6">
                            I had a great experience with Dr. Johnson. His knowledge and expertise in managing cardiovascular conditions were evident throughout my visits. While the wait times were occasionally long, the quality of care provided was worth the wait. Dr. Johnson took the time to address all my concerns and ensured I felt comfortable with the treatment plan.
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                            <BsTelephoneInbound className="text-2xl text-blue-400" />
                            <p>+01307236959 <br /> +0829497414394</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CiLocationOn className="text-2xl text-blue-400" />
                            <p>
                                Dhanmondi 17, Dhaka -1200, <br /> Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="label font-bold text-blue-500">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="input input-bordered w-full"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className="label font-bold text-blue-500">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="input input-bordered w-full"
                                        {...register("email", { required: "Email is required" })}
                                    />
                                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className="label font-bold text-blue-500">Phone Number</label>
                                    <input
                                        type="number"
                                        placeholder="Your phone number"
                                        className="input input-bordered w-full"
                                        {...register("phone", { required: "Phone number is required" })}
                                    />
                                    {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
                                </div>
                                <div>
                                    <label className="label font-bold text-blue-500">Doctor Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doctor name"
                                        className="input input-bordered w-full"
                                        {...register("doctorName", { required: "Doctor name is required" })}
                                    />
                                    {errors.doctorName && <p className="text-red-600">{errors.doctorName.message}</p>}
                                </div>
                                <div>
                                    <label className="label font-bold text-blue-500">Department</label>
                                    <select
                                        className="select select-bordered w-full"
                                        {...register("department", { required: "Department is required" })}
                                    >
                                        <option className="text-white" disabled value="default">Select Department</option>
                                        <option value="Special">Special</option>
                                        <option value="Cardiologist">Cardiologist</option>
                                        <option value="Dermatologist">Dermatologist</option>
                                        <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                                        <option value="Neurologist">Neurologist</option>
                                        <option value="Endocrinologist">Endocrinologist</option>
                                        <option value="Gynecologist">Gynecologist</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label font-bold text-blue-500">Date</label>
                                    <input
                                        type="date"
                                        className="input input-bordered w-full  text-black"
                                        {...register("date", { required: "Date is required" })}
                                    />
                                    {errors.date && <p className="text-red-600">{errors.date.message}</p>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full bg-blue-500 text-white hover:bg-blue-700 transition"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
