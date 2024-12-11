import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateDoctor = () => {
    const doctor = useLoaderData();
    const { _id, category, name, specialist, experience, chamberLocation, about, education, overview, phone, email, visitFee } = doctor;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
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
            };
            const doctorRes = await axiosSecure.patch(`/doctors/${_id}`, doctorDetails);

            if (doctorRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} has been updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/doctors');
            }
        }
    };

    return (
        <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold my-4 text-center">Update Doctor Details</h2>
            <div className="card w-full bg-green-200 p-4 md:p-8 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Doctor Name*</span>
                        </label>
                        <input
                            defaultValue={name}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className="text-red-600 text-sm">Doctor name is required</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Category*</span>
                            </label>
                            <select
                                defaultValue={category}
                                className="select select-bordered w-full"
                                {...register("category", { required: true })}
                            >
                                <option disabled value="default">Select Category</option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gynecologist">Gynecologist</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Specialist*</span>
                            </label>
                            <input
                                defaultValue={specialist}
                                type="text"
                                placeholder="Specialist"
                                className="input input-bordered w-full"
                                {...register("specialist", { required: true })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Experience*</span>
                            </label>
                            <input
                                defaultValue={experience}
                                type="text"
                                placeholder="Experience"
                                className="input input-bordered w-full"
                                {...register("experience", { required: true })}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Chamber Location*</span>
                            </label>
                            <input
                                defaultValue={chamberLocation}
                                type="text"
                                placeholder="Location"
                                className="input input-bordered w-full"
                                {...register("chamberLocation", { required: true })}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Phone*</span>
                            </label>
                            <input
                                defaultValue={phone}
                                type="number"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                                {...register("phone", { required: true })}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Visiting Fee*</span>
                            </label>
                            <input
                                defaultValue={visitFee}
                                type="number"
                                placeholder="Fee"
                                className="input input-bordered w-full"
                                {...register("visitFee", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">About*</span>
                            </label>
                            <textarea
                                defaultValue={about}
                                className="textarea textarea-bordered w-full"
                                placeholder="About Doctor"
                                {...register("about", { required: true })}
                            ></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Overview*</span>
                            </label>
                            <textarea
                                defaultValue={overview}
                                className="textarea textarea-bordered w-full"
                                placeholder="Overview"
                                {...register("overview", { required: true })}
                            ></textarea>
                        </div>
                    </div>

                    <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-md"
                        {...register("image", { required: true })}
                    />
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:from-pink-500 hover:to-orange-500 duration-300"
                        >
                            Update Doctor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDoctor;
