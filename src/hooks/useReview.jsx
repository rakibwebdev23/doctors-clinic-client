import {  useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

export const useReview = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    axiosSecure("/reviews")
        .then(res => {
            setLoading(false)
            setReviews(res.data)
    })

    return [reviews, loading];
};