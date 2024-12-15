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
                description={"The Doctors Clinic offers a variety of healthcare services to cater to patients of all ages. Patients can receive general consultations, which include comprehensive health check-ups and personalized medical advice. The clinic also provides specialized care in pediatrics, focusing on the healthy growth and development of children."}
            ></BannerShared>
            <div className="lg:flex gap-6">
                <div className="lg:w-1/2 px-4 lg:px-6">
                    <img className="rounded-xl" src={doctorImg} alt="" />
                </div>
                <div className="lg:w-1/2 space-y-4 lg:text-justify px-4 lg:px-8">
                    <h2 className="text-4xl text-orange-500 font-bold mt-8 lg:mt-0">Our Services</h2>
                    <p className="leading-relaxed tracking-normal lg:text-justify text-left text-black">The Doctors Clinic offers a wide range of healthcare services to meet the needs of patients of all ages. From general consultations, where patients receive comprehensive health check-ups and personalized medical advice, to specialized care in pediatrics, ensuring children’s healthy growth and development, the clinic prioritizes patient well-being.</p>
                    <div className="space-y-6 text-black">
                        <div className="flex gap-4 text-left">
                            <SlNotebook className="text-5xl font-bold text-blue-600"></SlNotebook>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">General Treatement</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-left">
                            <FaHeart className="text-5xl font-bold text-blue-600"></FaHeart>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Heart Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-left">
                            <LuBone className="text-5xl font-bold text-blue-600"></LuBone>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Orthopedic Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-left">
                            <FaBrain className="text-5xl font-bold text-blue-600"></FaBrain>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Neuro Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-left">
                            <RiWomenLine  className="text-5xl font-bold text-blue-600"></RiWomenLine >
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Gynecological Surgery</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus delectus pariatur vel autem quas, dicta minus asperiores a dolorem fuga.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-left">
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