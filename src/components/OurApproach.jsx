import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ourApproachImage from '../assets/Our approach.png';
import backgroundImage from '../assets/backgound.png';

const OurApproach = () => {
    const [ref, isVisible] = useScrollAnimation({ once: true });

    return (
        <section
            ref={ref}
            className="py-12 sm:py-16 lg:py-24 bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImage}), linear-gradient(180deg, #FFF6E3 0%, #FFFFFF 100%)`,
                backgroundSize: 'contain, cover'
            }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className={`space-y-6 order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                            Our Approach
                        </h2>

                        <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-lg sm:text-xl">
                            <p>
                                We build strong youth leaders through a collaborative and inclusive model. By
                                bringing together senior advisors, purpose-driven companies, NGOs, and
                                schools, we create a unified support system for students.
                            </p>
                            <p>
                                Through this partnership network, we offer free programs to schools so every
                                student — no matter their background — can access meaningful learning,
                                essential life skills, and real leadership opportunities
                            </p>
                        </div>

                        <button className="bg-[#A82228] text-white px-8 py-3 rounded-full font-bold hover:bg-[#901d22] transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
                            Join YoungVox
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={ourApproachImage}
                                alt="Students in uniform standing together in front of school building"
                                className={`w-full h-64 sm:h-80 lg:h-[500px] object-cover object-center ${isVisible ? 'animate-zoom-in-out' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
