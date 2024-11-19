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
                reviewText:data.details
            }
            console.log(patientDetails);
            
            const patientRes = await axiosSecure.post("/reviews", patientDetails)
            console.log(patientRes.data);
            
            if (patientRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an added to the Doctor List`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        }

    }

        return (
            <div>
                <SectionTitle title="please give me your Feedback" subTitle="please add your comment"></SectionTitle>
                <div className="card w-full shrink-0 shadow-2xl mt-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4 bg-green-300">
                        <div className="flex items-center gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Your name*</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name?.type === "required" && (
                                    <p className="text-red-600">Your Name is Required</p>
                                )}
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Occupation*</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" {...register("occupation", { required: true })} />
                                {errors.occupation?.type === "required" && (
                                    <p className="text-red-600">Occupation is Required</p>
                                )}
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold">Your Feedback</span>
                            </div>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("details", { required: true })}></textarea>
                        </div>
                        <div className="mb-2">
                            <label className="label">
                                <span className="label-text font-bold">Rating</span>
                            </label>
                            <Rating
                                className="bg-white p-2"
                                style={{ maxWidth: 180 }}
                                value={rating}
                                onChange={setRating}
                            />
                            {rating === 0 && <p className="text-red-600">Rating is Required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Your Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                        </div>
                        <div>
                            <button className="relative px-8 py-3 border-2 border-transparent bg-gray-700 transition-all duration-300 text-white hover:bg-green-600 hover:text-black font-semibold
                         flex justify-center items-center gap-2 rounded-lg">
                                Add Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default Review;