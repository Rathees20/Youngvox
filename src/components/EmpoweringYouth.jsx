import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import smilesAndLearningImage from '../assets/smiles and learning all.png';

const EmpoweringYouth = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const carouselImages = [
    {
      src: smilesAndLearningImage,
      
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      caption: "True strength comes from asking for help"
    },
    {
      src: "https://images.unsplash.com/photo-1529390079861-9deac17f4561?w=800&h=600&fit=crop",
      caption: "Building leaders of tomorrow"
    },
    {
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
      caption: "Empowering future leaders"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section ref={ref} id="about" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-4 sm:space-y-6 order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
              Empowering Youth. Inspiring Change.
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                YoungVox is a national youth leadership movement committed to shaping confident,
                socially responsible young leaders across India. As a non-political and non-religious
                initiative, it focuses on youth development, civic awareness, and community wellbeing
                aligned closely with the UN Sustainable Development Goals (SDGs). Through a
                structured school chapter-based model, YoungVox conducts regular leadership
                activities, youth campaigns, and peer-driven initiatives that strengthen student voice and
                participation.
              </p>
              <p>
                The YoungVox School Chapter is completely free of cost, offering schools a ready-to-run
                platform that nurtures leadership, life skills, and active citizenship through hands-on
                experiences, collaborative projects, and meaningful engagement opportunities.
              </p>
            </div>

            <button className="bg-[#A82228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-[#8a1c22] transition-all hover-lift w-full sm:w-auto">
              Join YoungVox
            </button>
          </div>

          {/* Right Column - Image Carousel */}
          <div className={`relative order-1 lg:order-2 w-full ${isVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full min-w-full flex-shrink-0 relative">
                    <img
                      src={image.src}
                      alt={image.caption || 'Carousel image'}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 sm:p-6">
                        <p className="text-sm sm:text-base lg:text-lg font-medium">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Carousel Navigation Arrows */}
              <div className="flex justify-center sm:justify-start gap-4 mt-4 sm:mt-6 lg:absolute lg:left-2 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col lg:mt-0 lg:gap-1 z-20">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg border border-gray-200"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:shadow-xl transition-all shadow-lg border border-gray-300"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringYouth;

