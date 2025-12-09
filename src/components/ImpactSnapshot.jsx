import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import impactBgImage from '../assets/impact snapshot.png';

const ImpactSnapshot = () => {
    const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.2 });

    // Extract numeric values and suffixes
    const impactStats = [
        {
            id: 1,
            number: 50,
            suffix: "",
            label: "Partner\nSchools"
        },
        {
            id: 2,
            number: 750,
            suffix: "+",
            label: "Student\nChange Leaders"
        },
        {
            id: 3,
            number: 20000,
            suffix: "+",
            label: "Benefited students\ntill date"
        },
        {
            id: 4,
            number: 6,
            suffix: "+",
            label: "States Approx.\nIndia"
        }
    ];

    // Create count up hooks for each stat with slight delays
    const count1 = useCountUp(impactStats[0].number, 0, 2000, isVisible);
    const count2 = useCountUp(impactStats[1].number, 0, 2000, isVisible);
    const count3 = useCountUp(impactStats[2].number, 0, 2000, isVisible);
    const count4 = useCountUp(impactStats[3].number, 0, 2000, isVisible);

    const counts = [count1, count2, count3, count4];

    // Format number with commas
    const formatNumber = (num) => {
        return num.toLocaleString('en-US');
    };

    return (
        <section ref={ref} className="relative py-16 md:py-20 lg:py-24 overflow-hidden min-h-[650px] md:min-h-0">
            {/* Background Image */}
            <img
                src={impactBgImage}
                alt="Impact Background"
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                style={{ minHeight: '100%' }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-6 md:mb-4 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-3">
                        Impact Snapshot
                    </h2>
                    <p className="text-white/90 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed px-4">
                        Our reach and impact across India, empowering the next generation of leaders with continued growth expected in the subsequent years
                    </p>
                </div>

                {/* Stats Circles - Desktop */}
                <div className="hidden md:flex justify-center items-center my-12">
                    <div className="relative flex items-center" style={{ width: '850px', height: '280px' }}>
                        {impactStats.map((stat, index) => {
                            // Alternate positions: down, up, down, up
                            const topPosition = index % 2 === 0 ? '40px' : '0px';
                            const currentCount = counts[index];

                            return (
                                <div
                                    key={stat.id}
                                    className="absolute"
                                    style={{
                                        left: `${index * 180}px`,
                                        top: topPosition,
                                        zIndex: index
                                    }}
                                >
                                    {/* Circle */}
                                    <div className={`w-[200px] h-[200px] rounded-full border-[2px] border-white/70 flex flex-col items-center justify-center bg-transparent ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                                         style={{ animationDelay: `${index * 200}ms` }}>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">
                                                {formatNumber(currentCount)}{stat.suffix}
                                            </div>
                                            <div className="text-xs text-white/90 font-medium whitespace-pre-line leading-tight px-2">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats Circles - Mobile (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-4 my-8 md:hidden max-w-md mx-auto">
                    {impactStats.map((stat, index) => {
                        const currentCount = counts[index];
                        return (
                            <div key={stat.id} className="flex justify-center">
                                <div className={`w-[140px] h-[140px] rounded-full border-[2px] border-white/70 flex flex-col items-center justify-center bg-transparent ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                                     style={{ animationDelay: `${index * 200}ms` }}>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            {formatNumber(currentCount)}{stat.suffix}
                                        </div>
                                        <div className="text-[10px] text-white/90 font-medium whitespace-pre-line leading-tight px-2">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Get in touch Button */}
                <div className={`text-center mt-8 md:mt-12 ${isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
                    <button className="bg-white text-[#A82228] px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                        Get in touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ImpactSnapshot;
