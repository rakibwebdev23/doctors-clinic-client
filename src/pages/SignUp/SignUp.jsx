import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/log.jpg"
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
                // user email, password er sathe name, photoURL send system
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log("User sign up successfully");

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                // console.log(res.data);

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
                                        .catch(error => console.log(error)
                                        )
                                }
                            })
                    })
            })
            .catch(error => console.log(error)
            )

    }

    return (
        <>
            <HelmetProvide
                helmetTitle={"SignUp"}
            ></HelmetProvide>
            <div className="hero bg-base-100 min-h-screen">
                <div className="hero-content md:flex">
                    <div className="text-center w-1/2 lg:text-left">
                        <img className="w-screen h-screen rounded-xl" src={img} alt="" />
                    </div>
                    <div className="card w-1/2 max-w-sm">
                        <h1 className="text-2xl font-bold text-center pt-6">SignUp to Doctors Clinic</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Your photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === "minLength" && <span className="text-red-600">Password must have 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className="text-red-600">Password less than 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-600">Password must have one Uppercase, one Lowercase and one Special characters.</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>

                        <SocialSign></SocialSign>

                        <small className="text-center pb-6">Already registered? Go to <Link to="/signin" className="font-bold text-blue-600 uppercase">Sign in</Link></small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;