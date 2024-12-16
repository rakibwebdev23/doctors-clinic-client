import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/log.jpg";
import HelmetProvide from "../../component/HelmetProvide";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialSign from "../../component/SocialSign/SocialSign";

const SignUp = () => {

    const { createUser, updateUserProfile, logOut } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: `${data.email} sign up successfully`,
                                        showConfirmButton: false,
                                        timer: 2000
                                    });
                                    logOut()
                                        .then(() => {
                                            navigate('/')
                                        })
                                        .catch(error => console.log(error));
                                }
                            });
                    });
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <HelmetProvide helmetTitle={"SignUp"} />
            <div className="hero bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="lg:flex lg:w-2/3 max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Left section */}
                    <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
                    </div>

                    {/* Right section */}
                    <div className="w-full lg:w-1/2 p-8">
                        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Sign Up to Doctors Clinic</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="form-control">
                                <label className="label font-semibold text-lg text-blue-600">Name</label>
                                <input 
                                    type="text" 
                                    {...register("name", { required: true })} 
                                    name="name" 
                                    placeholder="Your name" 
                                    className="input input-bordered w-full py-3 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                                />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label font-semibold text-lg text-blue-600">Photo URL</label>
                                <input 
                                    type="text" 
                                    {...register("photoURL", { required: true })} 
                                    placeholder="Your photo URL" 
                                    className="input input-bordered w-full py-3 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                                />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label font-semibold text-lg text-blue-600">Email</label>
                                <input 
                                    type="email" 
                                    {...register("email", { required: true })} 
                                    name="email" 
                                    placeholder="email" 
                                    className="input input-bordered w-full py-3 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                                />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold text-lg text-blue-600">Password</label>
                                <input 
                                    type="password" 
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ 
                                    })} 
                                    name="password" 
                                    placeholder="Password" 
                                    className="input input-bordered w-full py-3 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
                                />
                                {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Password must have 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be less than 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must have one uppercase letter, one lowercase letter, and one special character</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary w-full py-3 text-lg" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="mt-6 text-center">
                            <SocialSign />
                        </div>
                        <small className="text-center block mt-6 text-gray-600">
                            Already have an account? <Link to="/signin" className="font-bold text-blue-600 hover:underline">Sign In</Link>
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
