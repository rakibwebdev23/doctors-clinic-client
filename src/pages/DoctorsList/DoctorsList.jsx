import DoctorDetails from "../../component/DoctorDetails/DoctorDetails";

const DoctorsList = ({ doctors }) => {
    return (
        <div className="container mx-auto px-4 lg:px-6 py-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {doctors.map(doctor => (
                    <DoctorDetails key={doctor._id} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default DoctorsList;
