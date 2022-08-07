import React from 'react';
import { Zoom } from 'react-reveal';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './CompanyLogo.css'
import toyota from '../../images/logo/toyota.jpeg';
import lexus from '../../images/logo/lexus.jpeg';
import hino from '../../images/logo/hino.jpeg';
import nissan from '../../images/logo/nissan.jpg';
const CompanyLogo = () => {
    return (
        <div>
            <div className="text-center mt-10">
                <span className="text-center text-2xl font-bold">Company </span>
                <span className="text-center text-2xl font-bold text-cyan-800">
                    Logo
                </span>
            </div>

            <Zoom bottom cascade>
                <div className="companies">
                    <Swiper
                    
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            200: {
                                width: 200,
                                slidesPerView: 1,
                            },
                        }}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: true,
                        }}
                        loopedSlides={9999}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={toyota} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={lexus} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={hino} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="phone-container mx-auto">
                                <img src={nissan} alt="" />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </Zoom>
        </div>
    );
};

export default CompanyLogo;