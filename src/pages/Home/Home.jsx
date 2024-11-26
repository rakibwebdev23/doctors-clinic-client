import HelmetProvide from '../../component/HelmetProvide';
import SectionTitle from '../../component/SectionTitle';
import { useDoctorsList } from '../../hooks/useDoctorsList';
import Banner from '../Banner/Banner';
import DoctorsList from '../DoctorsList/DoctorsList';
import Appointment from '../Shared/Appointment/Appointment';
import AboutInfo from './About/AboutInfo/AboutInfo';
import Address from './Address/Address';
import PatientReview from './PatientReview/PatientReview';

const Home = () => {
    const [doctorsSpecial] = useDoctorsList();
    return (
        <div>
            <HelmetProvide
                helmetTitle={'Home'}
            ></HelmetProvide>
            <Banner></Banner>
            <AboutInfo></AboutInfo>
            <Address></Address>
            <PatientReview></PatientReview>
            <div className='mt-8'>
                <SectionTitle
                    heading={"Our Expert Doctors"}
                    subHeading={"An expert doctor is a highly skilled and knowledgeable medical professional with extensive experience diagnosing, treating, and managing various health conditions. They stay up-to-date with the latest advancements in medicine and provide compassion."}
                ></SectionTitle>
            </div>
            <DoctorsList doctors={doctorsSpecial}></DoctorsList>
            <Appointment></Appointment>
        </div>
    
    );
};

export default Home;