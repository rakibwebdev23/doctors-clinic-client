import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useAxiosSecure } from '../../hooks/useAxiosSecure';

const DoctorDetails = ({ doctor }) => {
    const { _id, name, image, specialist, email, visitFee, rating, chamberLocation, category } = doctor;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleDoctorAppointment = appointment => {
        console.log("Doctor appointment", appointment);
        if (user && user.email) {
            // Send to appointment to the database
            console.log(user, user.email);
            const doctorAppointment = {
                doctorId: _id,
                doctorName: name,
                patientEmail: user.email,
                image,
                category,
                patientName: user.displayName,
                specialist,
                visitFee
            }
            axiosSecure.post('/appointment', doctorAppointment)
                .then(res => {
                    console.log(res.data);
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
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Doctors"
                    className="rounded-xl " />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{specialist}</p>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
                <div className='mt-6'>
                    <p className='flex items-center gap-4'><IoLocationOutline className='font-bold text-xl'></IoLocationOutline> {chamberLocation}</p>
                    <p className='flex items-center gap-4'><FaRegAddressBook className='font-bold text-xl'></FaRegAddressBook> {email}</p>
                    <p className='flex items-center gap-4'><AiOutlineDollarCircle className='font-bold text-xl'></AiOutlineDollarCircle> $ {visitFee}</p>
                </div>
                <div className="card-actions flex items-center justify-between">
                    <Link><button className="btn btn-outline btn-warning">View Profile</button></Link>

                    <Link><button onClick={() => handleDoctorAppointment(doctor)} className="btn btn-success hover:btn-primary">Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;