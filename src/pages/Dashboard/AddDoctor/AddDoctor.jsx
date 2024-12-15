import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/SectionTitle";
import 'react-phone-number-input/style.css';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        if (res.data.success) {
            const doctorDetails = {
                category: data.category,
                name: data.name,
                specialist: data.specialist,
                experience: data.experience,
                chamberLocation: data.chamberLocation,
                rating,
                about: data.about,
                education: data.education,
                overview: data.overview,
                phone: data.phone,
                email: data.email,
                image: res.data.data.display_url,
                visitFee: parseFloat(data.visitFee)
            };
            const doctorRes = await axiosSecure.post("/doctors", doctorDetails);
            if (doctorRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} has been added to the Doctor List`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/doctors');
            }
        }
    };

    return (
        <div>
            <SectionTitle heading="Add a New Doctor" />
            <div className="card max-w-full bg-green-300">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body min-h-screen">
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-black">Doctor name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-md"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-red-600">Doctor name is required</p>}
                        </div>

                        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                            {/* Specialist */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Specialist*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Specialist"
                                    className="input input-bordered w-full max-w-md"
                                    {...register("specialist", { required: true })}
                                />
                                {errors.specialist && <p className="text-red-600">Specialist is required</p>}
                            </div>

                            {/* Experience */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Experience*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Experience"
                                    className="input input-bordered w-full max-w-md"
                                    {...register("experience", { required: true })}
                                />
                                {errors.experience && <p className="text-red-600">Experience is required</p>}
                            </div>

                            {/* Email */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Email*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full max-w-md"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <p className="text-red-600">Email is required</p>}
                            </div>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text font-bold text-black">Rating</span>
                        </label>
                        <Rating
                            className="bg-white p-2"
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />
                        {rating === 0 && <p className="text-red-600">Rating is required</p>}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="label">
                            <span className="label-text font-bold text-black">Upload Image*</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full max-w-md"
                            {...register("image", { required: true })}
                        />
                        {errors.image && <p className="text-red-600">Image is required</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center py-4">
                        <button
                            className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg w-full sm:w-1/2 duration-500 ease-in-out hover:from-pink-500 hover:to-orange-500 hover:scale-105"
                        >
                            Add Doctor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;