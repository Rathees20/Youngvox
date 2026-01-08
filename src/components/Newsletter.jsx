import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import frameImage from '../assets/Frame.png';
import backgroundCircle from '../assets/backgound circle.png';
import studentImage from '../assets/student.png';
import sendIcon from '../assets/icons/send.png';

export default function NewsletterSection() {
  const [ref] = useScrollAnimation({ once: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full bg-[#A82228] relative overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-4xl mx-auto text-center pt-10 sm:pt-14 pb-6 px-4">
        <h1 className="text-white text-[24px] leading-tight lg:text-[32px] font-extrabold mb-2">
          Subscribe to Our Free Monthly Newsletter
        </h1>

        <p className="text-white text-lg mb-6 sm:mb-8 leading-[1.8]">
          Stay Updated on YoungVox Activities, Events, and Student Initiatives
        </p>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[600px]">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-[#8a1c22] text-white placeholder-white/80 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-[#8a1c22] text-white placeholder-white/80 outline-none"
            />
          </div>

          <button className="w-full max-w-[600px] bg-white text-[#A82228] py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            Subscribe Now
            <img src={sendIcon} alt="send" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* IMAGE STACK */}
      <div className="relative w-full h-[320px] sm:h-[320px] md:h-[360px]">
        {/* BACKGROUND CIRCLE */}
        <img
          src={backgroundCircle}
          alt="circle"
          className="
            absolute
            bottom-[-40px]          /* ✅ MOBILE FIX */
            sm:bottom-[22px]
            md:bottom-[-80px]
            left-1/2 -translate-x-1/2
            w-[340px]               /* ✅ MOBILE FIX */
            sm:w-[380px]
            md:w-[420px]
            z-10
            pointer-events-none
          "
        />

        {/* STUDENTS */}
        <img
          src={studentImage}
          alt="students"
          className="
            absolute
            bottom-[-10px]          /* ✅ MOBILE FIX */
            sm:bottom-0
            left-1/2 -translate-x-1/2
            w-[360px]
            sm:w-[520px]
            md:w-[640px]
            z-20
            pointer-events-none
          "
        />

        {/* TORN FRAME */}
        <img
          src={frameImage}
          alt="frame"
          className="
            absolute
            bottom-[-33px]
            sm:bottom-[-44px]
            left-0
            w-full
            z-30
            pointer-events-none
          "
        />
      </div>
    </section>
  );
}
