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

const PatientReview = () => {
    const [reviews] = useReview();

    return (
        <div className="container mx-auto px-4 lg:px-8 py-10">
            <SectionTitle
                heading="Our Patient Reviews"
                subHeading="Here's what our patients have to say about their experience at our clinic."
            />

            <div className="p-4 md:p-6 lg:p-8">
                <Swiper
                    rewind={true}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper mt-10"
                >
                    {
                        reviews.map((item, index) => (
                        <SwiperSlide key={item._id || index}>
                            <div className="px-4 md:px-10 lg:px-48 w-full space-y-4">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                                            src={item.image}
                                            alt={item.patientName || "Patient"}
                                        />
                                        <div>
                                            <h2 className="font-bold text-neutral-700 text-lg md:text-xl">
                                                {item.patientName || "Anonymous"}
                                            </h2>
                                            <small className="text-neutral-500">
                                                {item.occupation || "Occupation"}
                                            </small>
                                            <Rating
                                                style={{ maxWidth: 120 }}
                                                value={item.rating || 0}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <FaQuoteLeft className="text-orange-500 text-3xl md:text-5xl" />
                                </div>
                                <p className="text-neutral-600 text-sm md:text-base leading-relaxed text-justify p-6 lg:p-0">
                                    {item.reviewText || "No review"}
                                </p>
                            </div>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default PatientReview;
