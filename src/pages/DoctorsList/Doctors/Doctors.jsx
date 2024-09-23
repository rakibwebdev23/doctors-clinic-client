import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDoctorsList } from '../../../hooks/useDoctorsList';
import DoctorsList from '../DoctorsList';
import BannerShared from '../../Shared/BannerShared/BannerShared';
import img from "../../../assets/images/doctor4 (2).jpg"
import { useState } from 'react';
import HelmetProvide from '../../../component/HelmetProvide';
// import { useParams } from 'react-router-dom';

const Doctors = () => {
    // const categories = [doctorsSpecial, doctorsCardiologist, doctorsDermatologist, doctorsOrthopedic, doctorsNeurologist, doctorsEndocrinologist, doctorsGynecologist];
    // const { category } = useParams();
    // const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(0);
    
    const [,doctorsSpecial, doctorsCardiologist, doctorsDermatologist, doctorsOrthopedic, doctorsNeurologist, doctorsEndocrinologist, doctorsGynecologist] = useDoctorsList();

    return (
        <div>
            <HelmetProvide helmetTitle={"Doctors"}></HelmetProvide>
            <BannerShared
                img={img}
                subTitle={"Our Doctors"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi asperiores quaerat, labore esse officia, exercitationem corporis repellat nostrum repudiandae architecto cum amet! Excepturi asperiores quaerat, labore esse officia, exercitationem corporis repellat nostrum repudiandae architecto cum amet! Quam accusamus, totam fugiat voluptas, dolorem sapiente repellendus quia blanditiis voluptates corporis alias id accusantium? Odit sequi exercitationem temporibus, nam labore, fugiat vero aliquid quos, eaque."}
            ></BannerShared>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)
                } className="text-center border-none">
                    <TabList>
                        <Tab>Expert</Tab>
                        <Tab>Cardiologist</Tab>
                        <Tab>Dermatologist</Tab>
                        <Tab>Orthopedic Surgeon</Tab>
                        <Tab>Neurologist</Tab>
                        <Tab>Endocrinologist</Tab>
                        <Tab>Gynecologist</Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                           <DoctorsList doctors={doctorsSpecial}></DoctorsList>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <DoctorsList doctors={doctorsCardiologist}></DoctorsList>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <DoctorsList doctors={doctorsDermatologist}></DoctorsList>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <DoctorsList doctors={doctorsOrthopedic}></DoctorsList>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <DoctorsList doctors={doctorsNeurologist}></DoctorsList>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <DoctorsList doctors={doctorsEndocrinologist}></DoctorsList>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <DoctorsList doctors={doctorsGynecologist}></DoctorsList>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Doctors;