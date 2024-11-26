import DoctorDetails from "../../component/DoctorDetails/DoctorDetails";

const DoctorsList = ({ doctors }) => {

    return (

        <div className="flex mx-auto mt-8">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-auto">
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