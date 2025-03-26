import { Link } from "react-router-dom";
import useAppointment from "../../../hooks/useAppointment";
import DoctorAppointList from "../DoctorAppointList/DoctorAppointList";

const DoctorAppointment = () => {
    const [appointment] = useAppointment();
    const doctorFee = appointment.reduce((total, doctor) => total + doctor.visitFee, 0);

    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:justify-evenly items-center space-y-4 lg:space-y-0 lg:space-x-6 mb-8 font-bold text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl text-blue-600">Appointment: {appointment.length}</h2>
                <h3 className="text-2xl md:text-3xl text-black">Doctor Visit Fee: ${doctorFee}</h3>
                {appointment.length ? (
                    <Link to="/dashboard/payment">
                        <button className="px-10 py-3 bg-green-600 hover:bg-green-700 w-full md:w-auto text-white rounded-md">
                            Pay
                        </button>
                    </Link>
                ) : (
                    <button disabled className="btn btn-outline btn-warning w-full md:w-auto">
                        Pay
                    </button>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra rounded-lg max-w-full">
                    <thead className="bg-green-400 text-white text-sm md:text-lg font-bold">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map((appointDoctor, index) => (
                            <DoctorAppointList
                                key={appointDoctor._id}
                                appointDoctor={appointDoctor}
                                index={index}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorAppointment;
