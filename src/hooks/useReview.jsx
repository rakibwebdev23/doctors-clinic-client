import { useEffect, useState } from "react";

export const useReview = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('../../public/review.json')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setReviews(data)
            })
    }, [])
    return [reviews, loading];
};