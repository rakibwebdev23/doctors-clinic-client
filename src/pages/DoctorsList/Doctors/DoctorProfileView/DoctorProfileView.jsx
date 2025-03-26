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
import Container from "../../../../component/Container/Container";

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
            const doctorAppointment = {
                doctorId: _id,
                doctorName: name,
                email: user.email,
                image,
                patientName: user.displayName,
                specialist,
                visitFee
            };
            axiosSecure.post('/appointment', doctorAppointment)
                .then(res => {
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
                });
        } else {
            Swal.fire({
                title: "You are not Signed In",
                text: "Please Sign In to confirm appointment!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/signin", { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="text-black">
            <HelmetProvide helmetTitle={"Doctor Profile"} />
            <div className="bg-fixed hero relative" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-40 bg-orange-500"></div>
                <div className="hero-content min-h-screen flex items-center justify-center lg:w-3/4 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 w-full">
                        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
                            <img src={image} className="w-full h-full object-cover border-4 border-white rounded-full transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div className="lg:ml-12 text-white w-full lg:w-2/3">
                            <h2 className="text-3xl lg:text-4xl font-semibold">{name}</h2>
                            <p className="text-lg">{specialist}</p>
                            <div className="flex items-center gap-2 mt-3">
                                <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                            </div>
                            <div className="mt-6">
                                <p className="flex items-center gap-2 text-lg">
                                    <IoLocationOutline className="text-xl text-orange-500" />
                                    {chamberLocation}
                                </p>
                                <p className="flex items-center gap-2 text-lg">
                                    <FaRegAddressBook className="text-xl text-orange-500" />
                                    {email}
                                </p>
                                <p className="flex items-center gap-2 text-lg">
                                    <AiOutlineDollarCircle className="text-xl text-orange-500" />
                                    ${visitFee}
                                </p>
                            </div>
                            <div className="mt-6">
                                <button onClick={handleDoctorAppointment} className="btn btn-outline border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 w-full py-2 rounded-md">
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Container>
                <div className="lg:mt-16 mt-8">
                    <h1 className="text-3xl text-orange-500 font-bold">About Me</h1>
                    <p className="text-justify leading-relaxed mt-4">{about}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
                        <div className="space-y-6 bg-orange-100 p-6 rounded-lg">
                            <h2 className="text-2xl text-orange-500 font-semibold border-b pb-2">Education</h2>
                            <p>{education}</p>
                        </div>
                        <div className="space-y-6 bg-gray-200 p-6 rounded-lg">
                            <h2 className="text-2xl text-orange-500 font-semibold border-b pb-2">Experience</h2>
                            <p>{experience}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
                        <div className="space-y-6 bg-slate-200 p-6 rounded-lg">
                            <h2 className="text-2xl text-orange-500 font-semibold border-b pb-2">Contact & Address</h2>
                            <p className="flex items-center gap-2"><IoLocationOutline className="text-xl text-orange-500" /> {chamberLocation}</p>
                            <p className="flex items-center gap-2"><FaRegAddressBook className="text-xl text-orange-500" /> {email}</p>
                            <p className="flex items-center gap-2"><FaPhone className="text-xl text-orange-500" /> {phone}</p>
                            <p className="flex items-center gap-2"><AiOutlineDollarCircle className="text-xl text-orange-500" /> ${visitFee}</p>
                        </div>
                        <div className="space-y-6 bg-slate-100 p-6 rounded-lg">
                            <h2 className="text-2xl text-orange-500 font-semibold border-b pb-2">Overview</h2>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DoctorProfileView;
