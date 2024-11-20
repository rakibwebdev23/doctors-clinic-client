import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialSign = () => {
    const { googleSignUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSign = () => {
        googleSignUser()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        // console.log(res.data);
                        
                        if (res.data) {
                            navigate('/');
                        }
                    })
                    .catch(error => console.log(error)
                    )
            })
    }
    return (
        <div className="card-body mt-[-50px]">
            <button className="btn btn-primary text-center" onClick={handleGoogleSign}><FaGoogle className="text-white font-bold text-xl"></FaGoogle></button>
        </div>
    );
};

export default SocialSign;