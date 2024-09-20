import HelmetProvide from '../../component/HelmetProvide';
import SectionTitle from '../../component/SectionTitle';
import { useDoctorsList } from '../../hooks/useDoctorsList';
import Banner from '../Banner/Banner';
import DoctorsList from '../DoctorsList/DoctorsList';
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
            <div className='mt-20'>
                <SectionTitle
                    heading={"Our Expert Doctors"}
                    subHeading={"An expert doctor is a highly skilled and knowledgeable medical professional with extensive experience in diagnosing, treating, and managing a wide range of health conditions. They stay up-to-date with the latest advancements in medicine and provide compassionate care."}
                ></SectionTitle>
            </div>
            <DoctorsList doctors={doctorsSpecial}></DoctorsList>
        </div>
    );
};

export default Home;