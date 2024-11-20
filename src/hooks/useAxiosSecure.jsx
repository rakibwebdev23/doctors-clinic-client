import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://doctors-chamber-server-woad.vercel.app"
})

const useAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('request stoped by interceptors before adding token', token);
        config.headers.authorization = `Bearer ${token}`
        return config;

    }, function (error) {
        return Promise.reject(error);
    });

    // intercept 401 & 403 status
    axiosSecure.interceptors.response.use(function (response) {

        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('intercept error', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/signin');
        }
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;