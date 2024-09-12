import AboutInfo from "./AboutInfo/AboutInfo";
import "./About.css"
import HelmetProvide from "../../../component/HelmetProvide";

const About = () => {
    return (
        <div>
            <HelmetProvide
                helmetTitle={"About"}
            ></HelmetProvide>
            <div
                className="about hero h-[700px]">
                <div className="hero-content text-center">
                    <div className="md:h-[300px] w-[75%] bg-black bg-opacity-40 flex items-center">
                        <div className='px-24'>
                            <div>
                                <h2 className="text-4xl font-bold text-blue-600 mb-2">About</h2>
                                <h1 className="mb-5 text-5xl font-bold uppercase text-orange-500">Doctors Clinic</h1>
                            </div>
                            <p className="mb-5 text-white">
                                Doctors Clinic is a leading healthcare provider dedicated to delivering high-quality medical services with a personal touch. Our team of experienced and compassionate doctors, nurses, and support staff is committed to providing comprehensive care to patients of all ages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <AboutInfo></AboutInfo>
        </div>
    );
};

export default About;