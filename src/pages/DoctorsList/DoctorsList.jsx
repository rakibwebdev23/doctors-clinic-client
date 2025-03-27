import Container from "../../component/Container/Container";
import DoctorDetails from "../../component/DoctorDetails/DoctorDetails";

const DoctorsList = ({ doctors }) => {
    return (
        <Container>
            <div className="container mx-auto py-16">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {doctors.map(doctor => (
                        <DoctorDetails key={doctor._id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default DoctorsList;
