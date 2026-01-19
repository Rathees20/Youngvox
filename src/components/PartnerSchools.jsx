import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import school1Logo from '../assets/school1.jpeg';
import school2Logo from '../assets/school2.png';
import school3Logo from '../assets/school3.jpeg';
import school4Logo from '../assets/school4.jpeg';
import school5Logo from '../assets/school5.jpeg';
import school6Logo from '../assets/school6.jpeg';
import school7Logo from '../assets/school7.png';
import school8Logo from '../assets/school8.jpeg';


const PartnerSchools = () => {
    const [ref, isVisible] = useScrollAnimation({ once: true });

    // Partner school logos
    const partnerSchools = [
        { id: 1, name: 'School 1', logo: school1Logo },
        { id: 2, name: 'School 2', logo: school2Logo },
        { id: 3, name: 'School 3', logo: school3Logo },
        { id: 4, name: 'School 4', logo: school4Logo },
        { id: 5, name: 'School 5', logo: school5Logo },
        { id: 6, name: 'School 6', logo: school6Logo },
        { id: 7, name: 'School 7', logo: school7Logo },
        { id: 8, name: 'School 8', logo: school8Logo },
    ];

    return (
        <section ref={ref} className="bg-[#FFF5F5] py-6 md:py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
                    {/* Left Side - Title and Description */}
                    <div className={`w-full md:w-1/3 text-left md:-ml-6 pt-4 md:pt-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-[24px] leading-tight lg:text-[32px] font-extrabold text-black mb-2 md:mb-3 text-left">
                            Partner Schools
                        </h2>
                        <p className="text-gray-600 text-sm md:text-xl leading-[1.6] md:leading-[1.8] text-left">
                            Collaborating with leading educational institutions across India
                        </p>
                    </div>

                    {/* Right Side - School Logos */}
                    <div className={`w-full md:w-2/3 ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
                        {/* Mobile Slider */}
                        <div className="md:hidden">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={15}
                                slidesPerView={1.5}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                speed={800}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                className="pb-12"
                            >
                                {partnerSchools.map((school) => (
                                    <SwiperSlide key={school.id}>
                                        <div className="p-3 flex items-center justify-center h-36">
                                            <img
                                                src={school.logo}
                                                alt={school.name}
                                                className="max-h-28 max-w-full object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Desktop Grid */}
                        <div className="hidden md:block">
                            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 mb-8 place-items-center">
                                {partnerSchools.map((school) => (
                                    <div
                                        key={school.id}
                                        className="p-5 flex items-center justify-center h-36 w-full"
                                    >
                                        <img
                                            src={school.logo}
                                            alt={school.name}
                                            className="max-h-28 max-w-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Dot - Desktop only */}
                            <div className="flex justify-center gap-2 mt-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSchools;
