import DoctorDetails from "../../component/DoctorDetails/DoctorDetails";

const DoctorsList = ({ doctors }) => {

    return (

        <div>
            <div className="grid md:grid-cols-3 gap-3 mt-10">
                {
                    doctors.map(doctor => <DoctorDetails
                        key={doctor._id}
                        doctor={doctor}
                    ></DoctorDetails>)
                }
            </div>
        </div>

    );
};

export default DoctorsList;