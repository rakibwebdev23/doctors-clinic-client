import { useForm } from "react-hook-form";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import img from "../../../assets/images/contact.jpg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
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
        }
        const res = await axiosSecure.post("/appointmentContact", userInfo);
        // console.log(res.data);
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
    }


    return (
        <div className="lg:px-8 p-4">
            <div className="hero mt-16 rounded bg-fixed justify-center h-full w-full" style={{
                backgroundImage: `url(${img})`,
                
            }}>
                <div className="hero-content flex flex-col lg:flex-row rounded bg-black bg-opacity-60 max-w-full">
                    <div className="lg:text-left lg:w-1/2 pl-4 text-fuchsia-200 w-full">
                        <h1 className="lg:text-5xl text-4xl text-blue-600 font-bold leading-tight">Contact With Us</h1>
                        <p className="py-6 px-4 text-justify leading-relaxed text-gray-200 lg:hyphens-none hyphens-auto break-words">
                        I had a great experience with Dr. Johnson. His knowledge and expertise in managing cardiovascular conditions were evident throughout my visits. While the wait times were occasionally long, the quality of care provided was worth the wait. Dr. Johnson took the time to address all my concerns and ensured I felt comfortable with the treatment plan. Overall, I would recommend him for his professionalism and skill.
                        </p>
                        <div className="flex items-center gap-6 mb-2">
                            <BsTelephoneInbound className="text-3xl text-blue-500"></BsTelephoneInbound>
                            <p>+01307236959 <br /> +0829497414394</p>
                        </div>
                        <div className="flex items-center gap-6 mt-2">
                            <CiLocationOn className="text-3xl text-blue-500"></CiLocationOn>
                            <p>Dhanmondi 17, Dhaka -1200, <br /> Bangladesh</p>
                        </div>
                    </div>
                    <div className="card lg:w-3/4 w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-200 font-bold">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" className="input input-bordered" {...register("name", { required: true })} />
                                    {errors.name?.type === "required" && (
                                        <p role="alert" className="text-red-600">Name is required</p>
                                    )}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-200 font-bold">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" className="input input-bordered" {...register("email", { required: true })} />
                                    {errors.email?.type === "required" && (
                                        <p role="alert" className="text-red-600">Email is required</p>
                                    )}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-200 font-bold">Phone Number</span>
                                    </label>
                                    <input type="number" placeholder="Your mobile" className="input input-bordered" {...register("phone", { required: true })} />
                                    {errors.phone?.type === "required" && (
                                        <p role="alert" className="text-red-600">Phone number is required</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-200 font-bold">Doctor Name</span>
                                    </label>
                                    <input type="text" placeholder="Doctor name" className="input input-bordered" {...register("doctorName", { required: true })} />
                                    {errors.doctorName?.type === "required" && (
                                        <p role="alert" className="text-red-600">Doctor name is required</p>
                                    )}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-bold text-fuchsia-200">Department</span>
                                    </label>
                                    <select defaultValue="default" className="select select-bordered w-full" {...register("department", { required: true })}>
                                        <option disabled value="default">All Category</option>
                                        <option value="Special">Special</option>
                                        <option value="Cardiologist">Cardiologist</option>
                                        <option value="Dermatologist">Dermatologist</option>
                                        <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                                        <option value="Neurologist">Neurologist</option>
                                        <option value="Endocrinologist">Endocrinologist</option>
                                        <option value="Gynecologist">Gynecologist</option>

                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-fuchsia-200 font-bold">Date</span>
                                    </label>
                                    <input type="date" placeholder="Your name" className="input input-bordered" {...register("date", { required: true })} />
                                    {errors.date?.type === "required" && (
                                        <p role="alert" className="text-red-600">Date is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-opacity-50 border-none">Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;