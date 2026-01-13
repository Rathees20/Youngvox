import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import schoolChapterImg from '../assets/school chapter 1.png';
import mentorLeadersImg from '../assets/Mentor and wing leaders.png';
import annualActivitiesImg from '../assets/Annual Activities.png';
import measuringImpactImg from '../assets/Measuring Impact.png';
import schoolsIcon from '../assets/icons/schools.png';
import advisorsIcon from '../assets/icons/advisors.png';
import ngosIcon from '../assets/icons/NGOS.png';
import companiesIcon from '../assets/icons/Companies.png';
import howWeEmpowerBg from '../assets/how empower bacground image.png';
import bePartChangeBg from '../assets/be part change background.png';

const HowWeEmpower = () => {
    const empowermentCards = [
        {
            id: 1,
            image: schoolChapterImg,
            title: "1. Formation of the\nSchool Chapter",
            description: "Launch a YoungVox Chapter in your school to empower students to lead and create impact",
            bgColor: "bg-white",
            textColor: "text-[#1A1A1A]",
            descColor: "text-gray-600"
        },
        {
            id: 2,
            image: mentorLeadersImg,
            title: "2. Identifying Teacher\nMentor and Wing Leaders",
            description: "The school selects a teacher mentor and Wing Leaders to guide the chapter and lead impactful student initiatives",
            bgColor: "bg-[#A82228]",
            textColor: "text-white",
            descColor: "text-white/90"
        },
        {
            id: 3,
            image: annualActivitiesImg,
            title: "3. Engaging in Monthly\nand Annual Activities",
            description: "Each wing engages in monthly and annual activities, led by student leaders and guided by YoungVox in their school",
            bgColor: "bg-white",
            textColor: "text-[#1A1A1A]",
            descColor: "text-gray-600"
        },
        {
            id: 4,
            image: measuringImpactImg,
            title: "4. Measuring Impact\nat School",
            description: "YoungVox uses structured assessments to track your school's progress and impact of Youngvox",
            bgColor: "bg-[#A82228]",
            textColor: "text-white",
            descColor: "text-white/90"
        }
    ];

    const partnerCards = [
        {
            id: 1,
            icon: schoolsIcon,
            title: "Schools",
            description: "Launch a YoungVox Chapter in your school to empower students to lead and create impact"
        },
        {
            id: 2,
            icon: advisorsIcon,
            title: "Advisors",
            description: "Guide YoungVox students and shape the next generation of changemakers"
        },
        {
            id: 3,
            icon: ngosIcon,
            title: "NGOs",
            description: "Partner with YoungVox to amplify youth-led initiatives and transform communities"
        },
        {
            id: 4,
            icon: companiesIcon,
            title: "Companies",
            description: "Support YoungVox to nurture responsible leaders who will drive the future"
        }
    ];

    const [headerRef, headerVisible] = useScrollAnimation({ once: true });
    const [cardsRef, cardsVisible] = useScrollAnimation({ once: true });
    const [partnersRef, partnersVisible] = useScrollAnimation({ once: true });

    return (
        <>
            <section
                className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16"
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16">
                    {/* Unified Container for Header and Cards */}
                    <div
                        className="rounded-[40px] p-8 md:p-12 lg:p-16 xl:p-20 shadow-sm border border-[#F5F5F5] transition-all duration-500 hover:shadow-md overflow-hidden relative"
                        style={{
                            backgroundColor: '#FF8E5114',
                            backgroundImage: `url(${howWeEmpowerBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 20px bottom 20px',
                            backgroundSize: 'clamp(200px, 20vw, 350px)'
                        }}
                    >
                        {/* Section Header */}
                        <div ref={headerRef} className={`text-center mb-12 md:mb-16 lg:mb-20 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                            <h2 className="text-[24px] leading-tight lg:text-[32px] font-extrabold text-[#1A1A1A] mb-4">
                                How YoungVox Empowers School
                            </h2>
                            <p className="text-[#4A4A4A]/80 text-xl max-w-4xl mx-auto leading-[1.8]">
                                Inspiring students to grow as leaders, address real time issues, and drive change within and beyond their schools
                            </p>
                        </div>

                        {/* Cards Slider */}
                        <div ref={cardsRef} className={`${cardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1280: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    }
                                }}
                                className="pb-16"
                            >
                                {empowermentCards.map((card, index) => (
                                    <SwiperSlide key={card.id}>
                                        <div
                                            className={`rounded-[30px] overflow-hidden shadow-xl ${card.bgColor} transition-all duration-300 hover:shadow-2xl w-full lg:h-[400px] xl:h-[440px] flex flex-col mx-auto`}
                                        >
                                            {/* Card Image Container */}
                                            <div className="p-5 lg:p-6 pb-0">
                                                <div className="relative w-full aspect-[16/8.5] overflow-hidden rounded-[20px] shadow-sm bg-gray-100">
                                                    <img
                                                        src={card.image}
                                                        alt={card.title}
                                                        className={`w-full h-full object-cover object-center ${cardsVisible ? 'animate-zoom-in-out' : ''}`}
                                                        style={{ animationDelay: `${index * 0.5}s` }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Card Content */}
                                            <div className="px-6 lg:px-8 pt-5 lg:pt-6 pb-6 lg:pb-8 flex-grow flex flex-col justify-start text-left">
                                                <h3 className={`text-lg lg:text-[20px] xl:text-[22px] font-extrabold mb-2 lg:mb-3 leading-tight whitespace-pre-line ${card.textColor}`}>
                                                    {card.title}
                                                </h3>
                                                <p className={`text-sm lg:text-[16px] leading-[1.6] ${card.descColor}`}>
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Be Part of the Change Section */}
            <section className="pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-20 lg:pb-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div ref={partnersRef}>
                        {/* Section Header */}
                        <div className={`flex flex-col md:flex-row justify-between items-start gap-6 mb-6 lg:mb-8 ${partnersVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                            <div className="max-w-xl">
                                <h2 className="text-[24px] leading-tight lg:text-[32px] font-extrabold text-[#1A1A1A] mb-4">
                                    Be Part of the Change
                                </h2>
                                <p className="text-[#4A4A4A]/80 text-xl leading-[1.8]">
                                    A transformative platform that nurtures leadership, voice, and real-world impact in every student.
                                </p>
                            </div>
                            <button
                                className="bg-[#A82228] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#8a1c22] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 whitespace-nowrap self-start"
                            >
                                Join Us Today
                            </button>
                        </div>

                        {/* Partner Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                            {partnerCards.map((card, index) => {
                                const centerOutwardOrder = [1, 2, 0, 3];
                                const animationDelay = centerOutwardOrder.indexOf(index) * 0.15;

                                return (
                                    <div
                                        key={card.id}
                                        className={`group rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:-translate-y-2 bg-white relative overflow-hidden ${partnersVisible ? 'animate-scale-in-from-center' : 'opacity-0'}`}
                                        style={{
                                            animationDelay: partnersVisible ? `${animationDelay}s` : '0s'
                                        }}
                                    >
                                        {/* Background Pattern */}
                                        <div
                                            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                                            style={{
                                                backgroundImage: `url(${bePartChangeBg})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                opacity: 0.5 // Making it much more prominent as per request
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="mb-6 bg-[#FDF2F2] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                                <img
                                                    src={card.icon}
                                                    alt={card.title}
                                                    className="w-10 h-10 object-contain"
                                                />
                                            </div>
                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                                                {card.title}
                                            </h3>
                                            {/* Description */}
                                            <p className="text-base text-gray-600 leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowWeEmpower;
