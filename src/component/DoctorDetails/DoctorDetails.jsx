import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const DoctorDetails = ({ doctor }) => {
    const { _id, name, image, specialist, email, visitFee, rating, chamberLocation } = doctor;

    return (
        <div className="bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-100 hover:shadow-xl">
            <figure className="w-full h-56 overflow-hidden rounded-t-lg">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
            </figure>
            <div className="p-6 text-left"> {/* Added text-left to align text to the left */}
                <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                <p className="text-lg text-gray-500 mb-3">{specialist}</p>

                <div className="flex items-center gap-2 mb-4">
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                </div>

                <div className="space-y-3 text-gray-600">
                    <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-xl text-gray-600" /> 
                        <span>{chamberLocation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegAddressBook className="text-xl text-gray-600" /> 
                        <span>{email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiOutlineDollarCircle className="text-xl text-gray-600" /> 
                        <span>${visitFee}</span>
                    </div>
                </div>
                <div className="mt-6">
                    <Link to={`/doctors/${_id}`}>
                        <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded-md transition-all duration-300">
                            View Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
