import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import smilesAndLearningImage from '../assets/smiles and learning all.png';

const EmpoweringYouth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const carouselImages = [
    {
      src: smilesAndLearningImage,
      caption: 'Smiles and learning all around!',
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200',
      caption: 'True strength comes from asking for help',
    },
    {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
      caption: 'Building leaders of tomorrow',
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

  return (
    <section
      ref={ref}
      className="bg-white pt-6 pb-20 lg:pt-10 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center gap-14">

          {/* LEFT CONTENT */}
          <div
            className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'
              }`}
          >
            <h2 className="text-[34px] leading-tight lg:text-[42px] font-extrabold text-gray-900">
              Empowering Youth.
              <br />
              Inspiring Change.
            </h2>

            <div className="text-gray-700 space-y-4 text-[15px] leading-relaxed max-w-xl">
              <p>
                YoungVox is a national youth leadership movement committed to shaping confident, socially responsible young leaders across India. As a non-political and non-religious initiative, it focuses on youth development, civic awareness, and community wellbeing aligned closely with the UN Sustainable Development Goals (SDGs). Through a structured school chapter–based model, YoungVox conducts regular leadership activities, youth campaigns, and peer-driven initiatives that strengthen student voice and participation.


              </p>

              <p>
                The YoungVox School Chapter is completely free of cost, offering schools a ready-to-run platform that nurtures leadership, life skills, and active citizenship through hands-on experiences, collaborative projects, and meaningful engagement opportunities.
              </p>
            </div>

            <button className="mt-6 inline-flex items-center bg-[#A82228] text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-[#8f1d22] transition">
              Join YoungVox
            </button>
          </div>

          {/* RIGHT CAROUSEL */}
          <div
            className={`relative ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'
              }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] sm:h-[360px] lg:h-[400px]">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, i) => (
                  <div key={i} className="min-w-full h-full relative">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/25" />

                    {/* CAPTION */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-sm font-medium">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-3 z-10">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringYouth;