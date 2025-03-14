import { Link } from "react-router-dom";
import img2 from "../../../../assets/images/medical1.jpg";
import img1 from "../../../../assets/images/medical4.jpg";
import Container from "../../../../component/Container/Container";

const AboutInfo = () => {
    return (
        <div className="hero mt-16 bg-white text-white">
            <Container>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={img1} className="w-3/4 rounded-lg outline outline-white shadow-black shadow-xl" />
                        <img src={img2} className="w-1/2 right-5 top-1/2 absolute rounded-lg shadow-2xl border-solid border-8 border-white" />
                    </div>
                    <div className="lg:w-1/2 lg:space-y-6 mt-16 lg:mt-0">
                        <h2 className="lg:text-3xl text-xl font-bold text-blue-600">About Us</h2>
                        <h1 className="lg:text-5xl md:text-4xl text-2xl leading-tight font-bold text-black">Expert Care, Trusted Service</h1>
                        <p className="lg:text-justify text-left hyphens-auto text-black leading-relaxed mt-4 lg:mt-0">
                            Doctors Clinic is a leading healthcare provider dedicated to delivering high-quality medical services with a personal touch. Our team of experienced and compassionate doctors, nurses, and support staff is committed to providing comprehensive care to patients of all ages. We understand that every patient is unique, and our approach is centered around personalized treatment plans that cater to individual needs. Whether you need routine check-ups, specialized care, or emergency services, we are here to ensure your health and well-being.
                        </p>
                        <Link to="/about"><button className="mt-6 px-6 py-2 bg-blue-800 text-white font-medium rounded hover:bg-blue-700">
                            Get More Info
                        </button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutInfo;