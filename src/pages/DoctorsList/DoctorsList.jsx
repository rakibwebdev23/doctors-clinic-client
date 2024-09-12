import SectionTitle from "../../component/SectionTitle";
import { useDoctorsList } from "../../hooks/useDoctorsList";
import DoctorDetails from "./DoctorDetails";

const DoctorsList = () => {
    const [doctorsSpecial] = useDoctorsList();
    return (
        <div className="mt-20">
            <SectionTitle
                heading={"Our Expert Doctors"}
                subHeading={"An expert doctor is a highly skilled and knowledgeable medical professional with extensive experience in diagnosing, treating, and managing a wide range of health conditions. They stay up-to-date with the latest advancements in medicine and provide compassionate care."}
            ></SectionTitle>
            <div className="grid grid-cols-3 gap-3 mt-10">
                {
                    doctorsSpecial.map(doctor => <DoctorDetails
                        key={doctor.id}
                        doctor={doctor}
                    ></DoctorDetails>)
                }
            </div>
        </div >
    );
};

export default DoctorsList;