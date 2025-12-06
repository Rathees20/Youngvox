import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import schoolChapterImg from '../assets/School Chapter.png';
import mentorLeadersImg from '../assets/Mentor and wing leaders.png';
import annualActivitiesImg from '../assets/Annual Activities.png';
import measuringImpactImg from '../assets/Measuring Impact.png';
import schoolsIcon from '../assets/icons/schools.png';
import advisorsIcon from '../assets/icons/advisors.png';
import ngosIcon from '../assets/icons/NGOS.png';
import companiesIcon from '../assets/icons/Companies.png';

const HowWeEmpower = () => {
    const empowermentCards = [
        {
            id: 1,
            image: schoolChapterImg,
            title: "Formation of the\nSchool Chapter",
            description: "Launch a YoungVox Chapter in your school to empower students to lead and create impact",
            borderColor: "border-[#E5E5E5]",
            bgColor: "bg-[#FFF9F0]",
            textColor: "text-black"
        },
        {
            id: 2,
            image: mentorLeadersImg,
            title: "Identifying Teacher\nMentor and Wing Leaders",
            description: "This school selects a teacher mentor and Wing Leaders to guide the chapter and lead meaningful student initiatives",
            borderColor: "border-[#A82228]",
            bgColor: "bg-[#A82228]",
            textColor: "text-white"
        },
        {
            id: 3,
            image: annualActivitiesImg,
            title: "Engaging in Monthly\nand Annual Activities",
            description: "Each wing engages in monthly and annual activities, led by student leaders and guided by YoungVox in their school",
            borderColor: "border-[#A82228]",
            bgColor: "bg-[#A82228]",
            textColor: "text-white"
        },
        {
            id: 4,
            image: measuringImpactImg,
            title: "Measuring Impact\nat School",
            description: "YoungVox uses structured assessments to track your school's progress and impact of YoungVox",
            borderColor: "border-[#E5E5E5]",
            bgColor: "bg-[#FFF9F0]",
            textColor: "text-black"
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
        <section className="bg-[#FFF5F5] py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div ref={headerRef} className={`text-center mb-10 md:mb-12 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
                        How YoungVox Empowers School
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        Inspiring students to grow as leaders, address real-time issues, and drive change within and beyond their schools
                    </p>
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-16 md:mb-20 lg:mb-24">
                    {empowermentCards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`rounded-xl md:rounded-2xl overflow-hidden shadow-md border-4 md:border-[6px] ${card.borderColor} ${card.bgColor} transition-transform hover:scale-105 hover-lift ${cardsVisible ? `animate-fade-in-up animate-delay-${(index % 2) * 100}` : 'opacity-0'}`}
                        >
                            {/* Card Image */}
                            <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-white">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Card Content */}
                            <div className={`p-4 md:p-5 lg:p-6 ${card.textColor}`}>
                                <h3 className="text-sm md:text-base lg:text-lg font-bold mb-2 leading-tight whitespace-pre-line">
                                    {card.title}
                                </h3>
                                <p className={`text-xs md:text-sm leading-relaxed ${card.textColor === 'text-white' ? 'text-white/95' : 'text-gray-700'}`}>
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Be Part of the Change Section */}
                <div ref={partnersRef}>
                    {/* Section Header */}
                    <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 md:mb-12 ${partnersVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 md:mb-3">
                                Be Part of the Change
                            </h2>
                            <p className="text-gray-700 text-sm md:text-base max-w-md leading-relaxed">
                                A transformative platform that nurtures leadership, voice, and real-world impact in every student
                            </p>
                        </div>
                        <button className="bg-[#A82228] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#8B1B20] transition-colors whitespace-nowrap">
                            Join Us Today
                        </button>
                    </div>

                    {/* Partner Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {partnerCards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover-lift ${partnersVisible ? `animate-scale-in animate-delay-${index * 100}` : 'opacity-0'}`}
                            >
                                {/* Icon */}
                                <div className="mb-3 md:mb-4">
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                                    />
                                </div>
                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                                    {card.title}
                                </h3>
                                {/* Description */}
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeEmpower;
