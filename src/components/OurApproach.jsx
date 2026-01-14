import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ourApproachImage from '../assets/Our approach.png';
import backgroundImage from '../assets/backgound.png';

const OurApproach = () => {
    const navigate = useNavigate();
    const [ref, isVisible] = useScrollAnimation({ once: true });

    return (
        <section
            ref={ref}
            className="bg-center bg-no-repeat lg:h-[500px] flex items-center py-0 pb-0 -mb-4 lg:-mb-14"
            style={{
                backgroundImage: `url(${backgroundImage}), linear-gradient(180deg, #FFF6E3 0%, #FFFFFF 100%)`,
                backgroundSize: 'contain, cover'
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 lg:pl-15 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-2 items-center">
                    {/* Left Column - Text Content */}
                    <div className={`space-y-3 order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                        <h2 className="text-[24px] leading-tight lg:text-[32px] font-extrabold text-[#1A1A1A]">
                            Our Approach
                        </h2>

                        <div className="space-y-2 text-[#4A4A4A] leading-[1.8] text-base text-justify">
                            <p>
                                We build strong youth leaders through a collaborative and inclusive model. By
                                bringing together senior advisors, purpose-driven companies, NGOs, and
                                schools, we create a unified support system for students.
                            </p>
                            <p>
                                Through this partnership network, we offer free programs to schools so every
                                student - no matter their background is - can access meaningful learning,
                                essential life skills, and real leadership opportunities
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                navigate('/joinyoung');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="mt-6 inline-flex items-center bg-[#A82228] text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-[#8f1d22] transition"
                        >
                            Join YoungVox
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className={`order-1 lg:order-2 flex justify-center lg:justify-end mb-0 ml-auto lg:ml-16 xl:ml-24 ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[550px] lg:max-w-[600px] aspect-[4/3] mb-0 pb-0">
                            <img
                                src={ourApproachImage}
                                alt="Students in uniform standing together in front of school building"
                                className={`w-full h-full object-cover object-top ${isVisible ? 'animate-zoom-in-out' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
