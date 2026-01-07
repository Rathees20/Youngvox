import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import smilesAndLearningImage from '../assets/smiles and learning all.png';
import youthEmpowerSecondImg from '../assets/Youthempower second image.png';

const EmpoweringYouth = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const carouselImages = [
    {
      src: smilesAndLearningImage,
      caption: 'Smiles and learning all around!',
    },
    {
      src: youthEmpowerSecondImg,
      caption: 'True strength is knowing when to ask for help',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-14">

          {/* LEFT CONTENT */}
          <div
            className={`space-y-6 pt-10 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'
              }`}
          >
            <h2 className="text-[24px] leading-tight lg:text-[32px] font-extrabold text-gray-900">
              Empowering Youth.
              <br />
              Inspiring Change.
            </h2>

            <div className="text-gray-700 space-y-4 text-base leading-[1.8] max-w-xl text-justify">
              <p>
                YoungVox is a national youth leadership movement committed to shaping confident, socially responsible young leaders across India. As a non-political and non-religious initiative, it focuses on youth development, civic awareness, and community wellbeing aligned closely with the UN Sustainable Development Goals (SDGs). Through a structured school chapter–based model, YoungVox conducts regular leadership activities, youth campaigns, and peer-driven initiatives that strengthen student voice and participation.
              </p>

              <p>
                The YoungVox School Chapter is completely free of cost, offering schools a <span className="whitespace-nowrap">ready-to-run platform</span> that nurtures leadership, life skills, and active citizenship through hands-on experiences, collaborative projects, and meaningful engagement opportunities.
              </p>
            </div>

            <button
              onClick={() => navigate('/joinyoung')}
              className="mt-6 inline-flex items-center bg-[#A82228] text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-[#8f1d22] transition"
            >
              Join YoungVox
            </button>
          </div>

          {/* RIGHT CAROUSEL */}
          <div
            className={`relative ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'
              } flex justify-center lg:justify-end lg:pt-8`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-[508px] h-[320px] sm:h-[400px] lg:h-[508px] aspect-square">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, i) => (
                  <div key={i} className="min-w-full h-full relative">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover object-bottom"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/25" />

                    {/* CAPTION */}
                    <div className="absolute bottom-8 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-lg font-medium">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[-100%] flex-col gap-1.5 z-20">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition"
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
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gray-300 shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition"
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
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* MOBILE NAVIGATION */}
            <div className="lg:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-auto active:scale-95 transition -translate-x-1/2"
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
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gray-300 shadow-md flex items-center justify-center pointer-events-auto active:scale-95 transition translate-x-1/2"
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
                    strokeWidth={2}
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