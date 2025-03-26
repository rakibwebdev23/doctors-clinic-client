import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDoctorsList } from '../../../hooks/useDoctorsList';
import DoctorsList from '../DoctorsList';
import BannerShared from '../../Shared/BannerShared/BannerShared';
import img from "../../../assets/images/doctor4 (2).jpg"
import { useState } from 'react';
import HelmetProvide from '../../../component/HelmetProvide';
import Container from '../../../component/Container/Container';

const Doctors = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [doctorsSpecial, doctorsCardiologist, doctorsDermatologist, doctorsOrthopedic, doctorsNeurologist, doctorsEndocrinologist, doctorsGynecologist] = useDoctorsList();


    return (
        <div>
            <HelmetProvide helmetTitle={"Doctors"}></HelmetProvide>
            <BannerShared
                img={img}
                subTitle={"Our Doctors"}
                description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi asperiores quaerat, labore esse officia, exercitationem corporis repellat nostrum repudiandae architecto cum amet! Excepturi asperiores quaerat, labore esse officia, exercitationem corporis repellat nostrum repudiandae architecto cum amet! Quam accusamus, totam fugiat voluptas."}
            ></BannerShared>
            <Container>
                <div>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)
                    } className="text-center">
                        <TabList className="font-bold uppercase border-black p-4 text-white flex lg:flex-row flex-col lg:justify-center text-left gap-2 py-6 mb-4">
                            <Tab className="p-4 bg-blue-700 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">expert</Tab>
                            <Tab className="p-4 bg-blue-700 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">cardiologist</Tab>
                            <Tab className="p-4 bg-blue-700 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">dermatologist</Tab>
                            <Tab className="p-4 bg-blue-700 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">orthopedic Surgeon</Tab>
                            <Tab className="p-4 bg-blue-700 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">neurologist</Tab>
                            <Tab className="p-4 bg-blue-700 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">endocrinologist</Tab>
                            <Tab className="p-4 bg-blue-700 hover:bg-gray-300 cursor-pointer rounded hover:text-black hover:delay-100 duration-300">gynecologist</Tab>
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
            </Container>
        </div>
    );
};

export default Doctors;