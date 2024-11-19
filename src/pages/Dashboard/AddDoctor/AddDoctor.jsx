import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/SectionTitle";
import 'react-phone-number-input/style.css';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if (res.data.success) {
            const doctorDetails = {
                category: data.category,
                name: data.name,
                specialist: data.specialist,
                experience: data.experience,
                chamberLocation: data.chamberLocation,
                rating: parseFloat(data.rating),
                about: data.about,
                education: data.education,
                overview: data.overview,
                phone: data.phone,
                email: data.email,
                image: res.data.data.display_url,
                visitFee: parseFloat(data.visitFee)
            }
            const doctorRes = await axiosSecure.post("/doctors", doctorDetails)
            if (doctorRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an added to the Doctor List`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/doctors');
            }
        }

    }

    return (
        <div>
            <SectionTitle
                heading="Add a New Doctor"
            ></SectionTitle>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Patient name*</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name?.type === "required" &&
                                <p className="text-red-600">Doctor name is required</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Ocupation*</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" {...register("occupation", { required: true })} />
                            {errors.occupation?.type === "required" &&
                                <p className="text-red-600">Occupation is required</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Review Dtails*</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" {...register("reviewText", { required: true })} />
                            {errors.reviewText?.type === "required" &&
                                <p className="text-red-600">Review details is required</p>
                            }
                        </div>
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

                    <div className="flex justify-center py-4">
                        <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg  duration-500 ease-in-out hover:from-pink-500 hover:to-orange-500 hover:scale-125 w-1/2">
                            Add Doctor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;