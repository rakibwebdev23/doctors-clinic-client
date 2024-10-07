import { Rating } from "@smastrom/react-rating";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaPhone, FaRegAddressBook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import img from "../../../../assets/images/doc2.jpg";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import HelmetProvide from "../../../../component/HelmetProvide";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAppointment from "../../../../hooks/useAppointment";

const DoctorProfileView = () => {
    const doctor = useLoaderData();
    const { _id, name, image, specialist, email, phone, visitFee, rating, chamberLocation, experience, about, education, overview } = doctor;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useAppointment();

    const handleDoctorAppointment = () => {
        if (user && user.email) {
            // Send to appointment to the database
            const doctorAppointment = {
                doctorId: _id,
                doctorName: name,
                email: user.email,
                image,
                patientName: user.displayName,
                specialist,
                visitFee
            }
            axiosSecure.post('/appointment', doctorAppointment)
                .then(res => {
                    console.log(res.data, doctorAppointment);                   
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} appointment added`,
                            showClass: {
                                popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                                popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Sign In",
                text: "Please Sign In to confirm appointment!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/signin", { state: { from: location } })
                }
            });
        }

    }

    return (
        <>
            <HelmetProvide
                helmetTitle={"Doctor Profile"}
            ></HelmetProvide>
            <div className="pb-10">
                <div className="bg-fixed hero h-[700px]" style={{ backgroundImage: `url("${img}")` }}
                >
                    <div className="hero-overlay bg-orange-500 bg-opacity-30"></div>
                    <div className="hero-content h-[600px] w-[75%]">
                        <div className='text-white -mt-20'>
                            <div className="md:flex items-center text-white mt-20">
                                <div className='w-1/2'>
                                    <img src={image} className="rounded-lg shadow-2xl"/>
                                </div>
                                <div className='w-1/2 md:ml-10'>
                                    <div className="card-body text-left">
                                        <div className="space-y-1">
                                            <h2 className="card-title md:text-4xl font-bold">{name}</h2>
                                            <p>{specialist}</p>
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={rating}
                                                readOnly
                                            />
                                        </div>
                                        <div className='mt-6 space-y-1'>
                                            <p className='md:flex items-center gap-4'><IoLocationOutline className='font-bold text-xl'></IoLocationOutline> {chamberLocation}</p>
                                            <p className='md:flex items-center gap-4'><FaRegAddressBook className='font-bold text-xl'></FaRegAddressBook> {email}</p>
                                            <p className='md:flex items-center gap-4'><AiOutlineDollarCircle className='font-bold text-xl'></AiOutlineDollarCircle> $ {visitFee}</p>
                                        </div>
                                        <div className="card-actions mt-2">
                                            <button onClick={handleDoctorAppointment} className="btn btn-outline border-0 border-b-4 border-t-4 font-bold text-green-400 border-green-600 hover:bg-green-600 hover:border-none zoom transition-transform duration-200  hover:scale-x-125">Appointment</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="space-y-3">
                        <h1 className="text-3xl text-orange-500 font-bold">About Me</h1>
                        <p>{about} Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem labore voluptatibus! Modi dignissimos architecto ipsam perspiciatis at quaerat eligendi aliquam iure quod aspernatur dolor nobis, quis nostrum ex doloremque maiores est laudantium distinctio quo laborum dolores perferendis cupiditate. Quaerat expedita officia quidem placeat, nostrum magnam inventore numquam  dolor nobis, quis nostrum ex doloremque maiores culpa alias!</p>
                    </div>
                    <div className="flex">
                        <div className="md:flex gap-20 mt-20 mx-auto">
                            <div className="bg-orange-200 bg-opacity-40 p-6 rounded-lg">
                                <div className="space-y-3">
                                    <h2 className="text-2xl text-orange-500 border-b font-bold ">Education</h2>
                                    <p>{education}</p>
                                </div>
                                <div className="space-y-3 mt-10">
                                    <h2 className="text-2xl text-orange-500 border-b font-bold ">Specialist</h2>
                                    <p>{specialist}</p>
                                </div>
                                <div className="space-y-3 mt-10">
                                    <h2 className="text-2xl text-orange-500 border-b font-bold ">Experience</h2>
                                    <p>{experience}</p>
                                </div>
                            </div>
                            <div className="bg-slate-300 bg-opacity-40 p-6 rounded-lg ">
                                <div className="space-y-3">
                                    <h2 className="text-2xl text-orange-500 border-b font-bold ">Address & Contact</h2>
                                    <p className='flex items-center gap-4'><IoLocationOutline className='font-bold text-xl'></IoLocationOutline> {chamberLocation}</p>
                                    <p className='flex items-center gap-4'><FaRegAddressBook className='font-bold text-xl'></FaRegAddressBook> {email}</p>
                                    <p className='flex items-center gap-4'><FaPhone className='font-bold text-xl'></FaPhone> {phone}</p>
                                    <h2 className="font-bold ">Visiting Charge</h2>
                                    <p className='flex items-center gap-4'><AiOutlineDollarCircle className='font-bold text-xl'></AiOutlineDollarCircle>$ {visitFee}</p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 mt-20">
                        <h2 className="text-3xl text-orange-500 border-b font-bold ">Review</h2>
                        <div>
                            <small>Ratting_______</small>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                        <p className="pt-6">{overview} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis nam ratione dignissimos earum nemo, reprehenderit molestias nobis hic enim expedita voluptatum ipsam! Odio, molestias atque, reiciendis quas aliquid sequi quibusdam numquam, esse perferendis quia sed tempora a vero temporibus aliquam delectus fugiat. Maxime, exercitationem atque. Molestias, dolores nobis eligendi illo debitis omnis veniam a, ipsam modi, odit voluptatum corrupti aspernatur. Nulla tempora soluta natus. Tempore nulla hic reiciendis assumenda cupiditate ad recusandae quasi perspiciatis eos modi possimus reprehenderit suscipit sapiente distinctio pariatur, blanditiis magnam ut veritatis repellat! Pariatur voluptatibus odit molestias labore possimus consectetur rerum provident veritatis? Alias, molestiae.</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DoctorProfileView;