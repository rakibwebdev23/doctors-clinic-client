import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateDoctor = () => {
    const doctor = useLoaderData();
    const { _id, category, name, specialist, experience, chamberLocation, about, education, overview, phone, email, visitFee } = doctor;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


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
            const doctorRes = await axiosSecure.patch(`/doctors/${_id}`, doctorDetails)
            
            if (doctorRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an Updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    return (
        <div>
            <h2 className="text-3xl font-bold my-4">Doctor Details Update</h2>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Doctor name*</span>
                            </label>
                            <input defaultValue={name} type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name?.type === "required" &&
                                <p className="text-red-600">Doctor name is required</p>
                            }
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Category*</span>
                                </label>
                                <select defaultValue={category} className="select select-bordered w-full" {...register("category", { required: true })}>
                                    <option disabled value="default">Category</option>
                                    <option value="Expert">Expert</option>
                                    <option value="Cardiologist">Cardiologist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="OrthopedicSurgeon">Orthopedic Surgeon</option>
                                    <option value="Neurologist">Neurologist</option>
                                    <option value="Endocrinologist">Endocrinologist</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold">Specialist*</span>
                                </label>
                                <input defaultValue={specialist} type="text" placeholder="doctor specialist" className="input input-bordered" {...register("specialist", { required: true })} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Doctor Experience*</span>
                                </label>
                                <input defaultValue={experience} type="text" placeholder="doctor experience" className="input input-bordered" {...register("experience", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Doctor chamber*</span>
                                </label>
                                <input defaultValue={chamberLocation} type="text" placeholder="doctor chamber location" className="input input-bordered" {...register("chamberLocation", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Education*</span>
                                </label>
                                <input defaultValue={education} type="text" placeholder="education" className="input input-bordered" {...register("education", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email*</span>
                                </label>
                                <input defaultValue={email} type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Rating*</span>
                                </label>
                                <input type="number" name="rating" placeholder="rating" className="input input-bordered" {...register("rating", {
                                    required: true,
                                    maxLength: 1
                                })} />
                                {errors.rating?.type === 'maxLength' && <p className='text-red-500'>Rating must be less 1-5 characters</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Phone*</span>
                                </label>
                                <input defaultValue={phone} type="number" placeholder="phone number" className="input input-bordered" {...register("phone", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Visiting Fee*</span>
                                </label>
                                <input defaultValue={visitFee} type="number" placeholder="visit vee" className="input input-bordered" {...register("visitFee", { required: true })} />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text font-bold">Doctor About*</span>
                            </label>
                            <textarea defaultValue={about} className="textarea textarea-bordered" placeholder="doctor about" {...register("about", { required: true })}></textarea>
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text font-bold">Overview*</span>
                            </label>
                            <textarea defaultValue={overview} className="textarea textarea-bordered" placeholder="overview" {...register("overview", { required: true })}></textarea>
                        </div>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-md mt-4" {...register("image", { required: true })} />

                    <div className="flex justify-center py-4">
                        <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg  duration-500 ease-in-out hover:from-pink-500 hover:to-orange-500 hover:scale-125 w-1/2">
                            Doctor Details Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDoctor;