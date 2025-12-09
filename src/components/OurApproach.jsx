import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ourApproachImage from '../assets/Our approach.png';

const OurApproach = () => {
    const [ref, isVisible] = useScrollAnimation({ once: true });
    
    return (
        <section ref={ref} className="bg-pink-50 py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className={`space-y-4 sm:space-y-6 order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            Our Approach
                        </h2>

                        <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
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

                        <button className="bg-[#A82228] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
                            Join YoungVox
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={ourApproachImage}
                                alt="Students in uniform standing together in front of school building"
                                className={`w-full h-64 sm:h-80 lg:h-96 object-cover ${isVisible ? 'animate-zoom-in-out' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
