
import DoctorDetails from "./DoctorDetails";

const DoctorsList = ({ doctors }) => {

    return (

        <div className="grid grid-cols-3 gap-3 mt-10">
            {
                doctors.map(doctor => <DoctorDetails
                    key={doctor.id}
                    doctor={doctor}
                ></DoctorDetails>)
            }
        </div>
        
    );
};

export default DoctorsList;