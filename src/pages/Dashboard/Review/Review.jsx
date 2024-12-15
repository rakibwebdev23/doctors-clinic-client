import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Review = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if (res.data.success) {
            const patientDetails = {
                patientName: data.name,
                rating,
                image: res.data.data.display_url,
                occupation: data.occupation,
                reviewText: data.details
            }
            
            const patientRes = await axiosSecure.post("/reviews", patientDetails)
            
            if (patientRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the Doctor List`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        }
    }

    return (
        <div className="px-4 py-6 lg:px-8 lg:py-12">
            <SectionTitle heading="Please Add Your Comment" />
            <div className="card shrink-0 lg:mt-10 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-full space-y-4 bg-green-300 p-4 rounded-lg">
                    <div className="lg:flex items-center gap-4">
                        <div className="form-control lg:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text font-bold text-black">Your Name*</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered w-full" {...register("name", { required: true })} />
                            {errors.name?.type === "required" && <p className="text-red-600">Your Name is Required</p>}
                        </div>
                        <div className="form-control lg:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text font-bold text-black">Occupation*</span>
                            </label>
                            <input type="text" placeholder="Occupation" className="input input-bordered w-full" {...register("occupation", { required: true })} />
                            {errors.occupation?.type === "required" && <p className="text-red-600">Occupation is Required</p>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold text-black">Your Feedback</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Feedback Details" {...register("details", { required: true })}></textarea>
                    </div>
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text font-bold text-black">Rating</span>
                        </label>
                        <Rating
                            className="bg-white p-2 text-yellow-600"
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />
                        {rating === 0 && <p className="text-red-600">Rating is Required</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-black">Your Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs text-white" {...register("image", { required: true })} />
                    </div>
                    <div>
                        <button className="relative px-8 py-3 border-2 border-transparent bg-gray-700 transition-all duration-300 text-white hover:bg-green-500 hover:text-black font-semibold flex justify-center items-center gap-2 rounded-lg w-full md:w-auto">
                            Add Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
