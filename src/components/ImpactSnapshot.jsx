import React from 'react';
import impactBgImage from '../assets/impact snapshot.png';

const ImpactSnapshot = () => {
    const impactStats = [
        {
            id: 1,
            number: "50",
            label: "Partner\nSchools"
        },
        {
            id: 2,
            number: "750+",
            label: "Student\nChange Leaders"
        },
        {
            id: 3,
            number: "20,000+",
            label: "Benefited students\ntill date"
        },
        {
            id: 4,
            number: "6+",
            label: "States Approx.\nIndia"
        }
    ];

    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden min-h-[650px] md:min-h-0">
            {/* Background Image */}
            <img
                src={impactBgImage}
                alt="Impact Background"
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                style={{ minHeight: '100%' }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-6 md:mb-4">
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
                                    <div className="w-[200px] h-[200px] rounded-full border-[2px] border-white/70 flex flex-col items-center justify-center bg-transparent">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-white mb-1">
                                                {stat.number}
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
                    {impactStats.map((stat) => (
                        <div key={stat.id} className="flex justify-center">
                            <div className="w-[140px] h-[140px] rounded-full border-[2px] border-white/70 flex flex-col items-center justify-center bg-transparent">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-[10px] text-white/90 font-medium whitespace-pre-line leading-tight px-2">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Get in touch Button */}
                <div className="text-center mt-8 md:mt-12">
                    <button className="bg-white text-[#A82228] px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        Get in touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ImpactSnapshot;
