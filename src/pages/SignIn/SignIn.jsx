import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from "../../assets/images/log.jpg";
import HelmetProvide from "../../component/HelmetProvide";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialSign from "../../component/SocialSign/SocialSign";

const SignIn = () => {

    const { signInUser } = useAuth();
    const [disabled, setDisabled] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${user.displayName} Signed In Successfully`,
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate(from, { replace: true });
            });
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    return (
        <>
            <HelmetProvide helmetTitle={"SignIn"} />
            <div className="hero bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="lg:flex lg:w-2/3 max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Left section */}
                    <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
                    </div>

                    {/* Right section */}
                    <div className="w-full lg:w-1/2 p-8">
                        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">Sign In to Doctors Clinic</h1>
                        <form onSubmit={handleSignIn} className="space-y-6">
                            <div className="form-control">
                                <label className="label font-semibold text-lg text-blue-600">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full py-3 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 placeholder-gray-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-semibold text-lg text-blue-600">Password</label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full py-3 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 placeholder-gray-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label font-semibold text-lg text-blue-600">Captcha</label>
                                <div className="captcha-wrapper flex flex-col items-center">
                                    <LoadCanvasTemplate />
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered w-full mt-3 py-3 px-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 placeholder-gray-500" required />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary w-full py-3 text-lg" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <div className="mt-6 text-center">
                            <SocialSign />
                        </div>

                        <small className="text-center block mt-6 text-gray-600">
                            Don't have an account? <Link to="/signup" className="font-bold text-blue-600 hover:underline">Sign Up</Link>
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
