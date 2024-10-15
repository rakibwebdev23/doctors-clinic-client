import { Link } from "react-router-dom";
import useAppointment from "../../../hooks/useAppointment";
import DoctorAppointList from "../DoctorAppointList/DoctorAppointList";

const DoctorAppointment = () => {
    const [appointment] = useAppointment();
    const doctorFee = appointment.reduce((total, doctor) => total + doctor.visitFee, 0);

    return (
        <div>
            <div className="flex font-bold mb-10 justify-evenly items-center">
                <h2 className="text-3xl">Appointment: {appointment.length}</h2>
                <h3 className="text-3xl">Doctor Visit Fee: {doctorFee}</h3>
                {
                    appointment.length ? <Link to="/dashboard/payment"><button className="btn btn-outline btn-warning">Pay</button></Link> : 
                    <button disabled className="btn btn-outline btn-warning">Pay</button>
                }
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table rounded-lg">
                        {/* head */}
                        <thead className="font-bold text-xl bg-green-400">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Speciality</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointment.map((appointDoctor, index) => <DoctorAppointList
                                    key={appointDoctor._id}
                                    appointDoctor={appointDoctor}
                                    index={index}
                                ></DoctorAppointList>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointment;