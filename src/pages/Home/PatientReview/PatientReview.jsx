import SectionTitle from "../../../component/SectionTitle";
import { useReview } from "../../../hooks/useReview";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
// Icons and Rating imports
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Container from "../../../component/Container/Container";

const PatientReview = () => {
    const [reviews] = useReview();

    return (
        <Container>
            <div className="container mx-auto px-4 pt-10">
                <SectionTitle
                    heading="What Our Patients Say"
                    subHeading="Discover the experiences and feedback from our patients."
                />
                <div className="mt-12">
                    <Swiper
                        rewind={true}
                        navigation={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        speed={1500}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={item._id || index}>
                                <div className="bg-white shadow-lg rounded-xl p-8 mx-4 md:mx-8 transition-all duration-300 transform hover:scale-105">
                                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-6 items-center">
                                        {/* Patient Image and Info */}
                                        <div className="lg:col-span-2 flex items-center gap-6">
                                            <img
                                                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-blue-600 shadow-xl"
                                                src={item.image}
                                                alt={item.patientName || "Patient"}
                                            />
                                            <div>
                                                <h3 className="font-semibold text-xl md:text-2xl text-gray-800">
                                                    {item.patientName || "Anonymous"}
                                                </h3>
                                                <p className="text-gray-500 text-sm">
                                                    {item.occupation || "Occupation"}
                                                </p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <Rating
                                                        style={{ maxWidth: 120 }}
                                                        value={item.rating || 0}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden lg:block lg:col-span-1 text-center">
                                            <FaQuoteLeft className="text-gray-600 text-4xl" />
                                        </div>

                                        {/* Review Text */}
                                        <div className="lg:col-span-2">
                                            <p className="text-black text-sm md:text-base leading-relaxed lg:text-justify text-center">
                                                {item.reviewText || "No review available"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default PatientReview;
