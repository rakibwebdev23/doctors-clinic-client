import SectionTitle from "../../../component/SectionTitle";
import { useReview } from "../../../hooks/useReview";
//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
//rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const PatientReview = () => {
    const [reviews] = useReview();
    
    return (
        <div>
            <SectionTitle
                heading={"Our Patient Review"}
                subHeading={"I had a great experience with Dr. Johnson. His knowledge and expertise in managing cardiovascular conditions were evident throughout my visits. While the wait times were occasionally long, the quality of care provided was worth the wait. Dr. Johnson took the time to address all my concerns and ensured I felt comfortable with the treatment plan. Overall, I would recommend him for his professionalism and skill."}
            ></SectionTitle>
            <div className="p-4 lg:p-8">
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper mt-14"
                >
                    {
                        reviews.map(item => <SwiperSlide
                            key={item.patientId}>
                            <div className="px-14 lg:px-48 w-full space-y-2">
                                <div className="lg:flex items-center justify-between ">
                                    <div className="lg:flex items-center gap-4">
                                        <img className="w-16 h-16 rounded-full" src={item.image} />
                                        <div>
                                            <h2 className="font-bold text-neutral-500 text-xl">{item.patientName}</h2>
                                            <small className="text-neutral-400 ">{item.occupation}</small>
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={item.rating}
                                                readOnly
                                            />

                                        </div>
                                    </div>
                                    <FaQuoteLeft className="lg:size-14 font-bold text-orange-500 size-10"></FaQuoteLeft>
                                </div>
                                <p className="text-justify leading-tight">{ item.reviewText}</p>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default PatientReview;