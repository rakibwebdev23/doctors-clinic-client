import AboutInfo from "./AboutInfo/AboutInfo";
import HelmetProvide from "../../../component/HelmetProvide";
import BannerShared from "../../Shared/BannerShared/BannerShared";
import imgAbout from "../../../assets/images/medical6.jpg";

const About = () => {
    return (
        <div>
            <HelmetProvide
                helmetTitle={"About"}
            ></HelmetProvide>
            <BannerShared
                img={imgAbout}
                title="About"
                subTitle="Doctors Clinic"
                description="Doctors Clinic is a leading healthcare provider dedicated to delivering high-quality medical services with a personal touch. Our team of experienced and compassionate doctors, nurses, and support staff is committed to providing comprehensive care to patients of all ages."
            ></BannerShared>
            <AboutInfo></AboutInfo>
        </div>
    );
};

export default About;