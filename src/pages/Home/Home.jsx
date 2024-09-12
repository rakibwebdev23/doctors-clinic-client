import HelmetProvide from '../../component/HelmetProvide';
import Banner from '../Banner/Banner';
import DoctorsList from '../DoctorsList/DoctorsList';
import AboutInfo from './About/AboutInfo/AboutInfo';
import Address from './Address/Address';
import PatientReview from './PatientReview/PatientReview';

const Home = () => {
    return (
        <div>
            <HelmetProvide
                helmetTitle={'Home'}
            ></HelmetProvide>
            <Banner></Banner>
            <AboutInfo></AboutInfo>
            <Address></Address>
            <PatientReview></PatientReview>
            <DoctorsList></DoctorsList>
        </div>
    );
};

export default Home;