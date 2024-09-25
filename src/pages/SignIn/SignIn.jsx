import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import img from "../../assets/images/log.jpg"
import { AuthContext } from "../../providers/AuthProviders";
import HelmetProvide from "../../component/HelmetProvide";
import Swal from "sweetalert2";

const SignIn = () => {

    const { signInUser } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);

    // login private route set
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login Successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
    }

    // const handleGoogleSignIn = () => {
    //     googleSignUser()
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             navigate(from, { replace: true });
    //         })
    // }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(false);
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    return (
        <>
            <HelmetProvide
                helmetTitle={"SignIn"}
            ></HelmetProvide>
            <div className="hero bg-white min-h-screen">
                <div className="hero-content md:flex">
                    <div className="text-center w-1/2 lg:text-left">
                        <img className="h-screen w-screen rounded-xl" src={img} alt="" />
                    </div>
                    <div className="card w-1/2 max-w-sm">
                        <h1 className="text-2xl font-bold text-center pt-6">SignIn to Doctors Clinic</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="SignIn" />
                            </div>
                        </form>
                        {/* <div className="card-body mt-[-50px]">
                            <button className="btn btn-ghost text-center" onClick={handleGoogleSignIn}><FaGoogle className="text-blue-600 font-bold text-xl"></FaGoogle></button>
                        </div> */}
                        <small className="text-center pb-6">Please register at first. Go to <Link to="/signup" className="font-bold text-blue-600 uppercase">Sign Up</Link></small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;