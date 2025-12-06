import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import school1Logo from '../assets/school1.png';
import school2Logo from '../assets/school2.png';
import school3Logo from '../assets/school3.png';
import school4Logo from '../assets/school4.png';
import school5Logo from '../assets/school5.png';
import school6Logo from '../assets/school6.png';

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
    ];

    return (
        <section ref={ref} className="bg-[#FFF5F5] py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
                    {/* Left Side - Title and Description */}
                    <div className={`w-full md:w-1/3 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 md:mb-3">
                            Partner Schools
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Collaborating with leading educational institutions across India
                        </p>
                    </div>

                    {/* Right Side - School Logos Grid */}
                    <div className={`w-full md:w-2/3 ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                            {partnerSchools.map((school) => (
                                <div
                                    key={school.id}
                                    className="p-4 md:p-6 flex items-center justify-center h-20 md:h-24"
                                >
                                    {/* School logo */}
                                    <img
                                        src={school.logo}
                                        alt={school.name}
                                        className="max-h-12 md:max-h-16 max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-3 md:mt-4">
                            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSchools;
