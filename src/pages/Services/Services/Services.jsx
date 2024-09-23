import BannerShared from "../../Shared/BannerShared/BannerShared";
import serviceImg from "../../../assets/images/services1.jpg";
import doctorImg from "../../../assets/images/serveiceDoctor.jpg";
import { SlNotebook } from "react-icons/sl";
import { FaBrain, FaHeart } from "react-icons/fa";
import { LuBone } from "react-icons/lu";
import { RiWomenLine } from "react-icons/ri";
import { BiDonateBlood } from "react-icons/bi";
import Appointment from "../../Shared/Appointment/Appointment";
import HelmetProvide from "../../../component/HelmetProvide";

const Services = () => {
    return (
        <div>
            <HelmetProvide helmetTitle={"Services"}></HelmetProvide>
            <BannerShared
                img={serviceImg}
                subTitle={"Our Services"}
                description={"The Doctors Clinic offers a wide range of healthcare services to meet the needs of patients of all ages. From general consultations, where patients receive comprehensive health check-ups and personalized medical advice, to specialized care in pediatrics, ensuring children’s healthy growth and development, the clinic prioritizes patient well-being. The cardiology department provides expert heart care, including the diagnosis and management of cardiovascular conditions, while dermatology services address common skin issues like acne, eczema, and infections."}
            ></BannerShared>
            <div className="md:flex gap-6 md:mt-32">
                <div className="md:w-1/2">
                    <img className="rounded-xl" src={doctorImg} alt="" />
                </div>
                <div className="md:w-1/2 space-y-4 text-left">
                    <h2 className="text-4xl text-orange-500 font-bold">Our Services</h2>
                    <p className="space-y-2">The Doctors Clinic offers a wide range of healthcare services to meet the needs of patients of all ages. From general consultations, where patients receive comprehensive health check-ups and personalized medical advice, to specialized care in pediatrics, ensuring children’s healthy growth and development, the clinic prioritizes patient well-being. The cardiology department provides expert heart care, including the diagnosis and management of cardiovascular conditions, while dermatology services address common skin issues like acne, eczema, and infections.</p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <SlNotebook className="text-5xl font-bold text-blue-600"></SlNotebook>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">General Treatement</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <FaHeart className="text-5xl font-bold text-blue-600"></FaHeart>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Heart Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <LuBone className="text-5xl font-bold text-blue-600"></LuBone>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Orthopedic Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <FaBrain className="text-5xl font-bold text-blue-600"></FaBrain>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Neuro Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <RiWomenLine  className="text-5xl font-bold text-blue-600"></RiWomenLine >
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Gynecological Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <BiDonateBlood  className="text-5xl font-bold text-blue-600"></BiDonateBlood >
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Blood Trasfusion</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Appointment></Appointment>
        </div>
    );
};

export default Services;