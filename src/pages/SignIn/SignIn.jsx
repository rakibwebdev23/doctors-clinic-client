import { Link } from "react-router-dom";

const SignIn = () => {

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);       
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content  md:flex">
                <div className="text-center w-1/2 lg:text-left">

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignIn" />
                        </div>
                    </form>
                   <small className="text-center pb-6">Don't have an account? please <Link to="/signup" className="font-bold text-blue-600">SignUp</Link></small>
                </div>
            </div>
        </div>
    );
};

export default SignIn;