import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const DoctorDetails = ({ doctor }) => {

    const { _id,name, image, specialist, location, email, visitFee, rating } = doctor;

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
                    <p className='flex items-center gap-4'><IoLocationOutline className='font-bold text-xl'></IoLocationOutline> {location}</p>
                    <p className='flex items-center gap-4'><FaRegAddressBook className='font-bold text-xl'></FaRegAddressBook> {email}</p>
                    <p className='flex items-center gap-4'><AiOutlineDollarCircle className='font-bold text-xl'></AiOutlineDollarCircle> $ {visitFee}</p>
                </div>
                <div className="card-actions ">
                    <Link to={`/doctor/${_id}`}><button className="btn btn-outline btn-warning">View Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;