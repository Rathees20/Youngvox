import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import frameImage from '../assets/Frame.png';
import backgroundCircle from '../assets/backgound circle.png';
import studentImage from '../assets/student.png';
import sendIcon from '../assets/icons/send.png';

export default function NewsletterSection() {
  const [ref] = useScrollAnimation({ once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert('Please fill all fields');
      return;
    }

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyukZXLV9M0LpExZmnX6dP-4JIQ-A6l8xN5y_WcjNwMYKRnu11J685bzLj1V2dDHEnXFA/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
        }
      );

      alert('Subscribed Successfully 🎉');
      setFormData({ name: '', email: '' });
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  };

  return (
    <section ref={ref} className="w-full bg-[#A82228] relative overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-4xl mx-auto text-center pt-10 sm:pt-14 pb-6 px-4">
        <h2 className="text-[14px] leading-[1.8] lg:text-[32px] font-bold text-white mb-4">
          Stay Updated on YoungVox Activities, Events, and Student Initiatives
        </h2>

        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[600px]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-[#8a1c22] text-white placeholder-white/80 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-[#8a1c22] text-white placeholder-white/80 outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full max-w-[600px] bg-white text-[#A82228] py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            Subscribe Now
            <img src={sendIcon} alt="send" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* IMAGE STACK */}
      <div className="relative w-full h-[320px] sm:h-[320px] md:h-[360px]">
        <img
          src={backgroundCircle}
          alt="circle"
          className="absolute bottom-[-40px] sm:bottom-[22px] md:bottom-[-80px] left-1/2 -translate-x-1/2 w-[340px] sm:w-[380px] md:w-[420px] z-10 pointer-events-none"
        />

        <img
          src={studentImage}
          alt="students"
          className="absolute bottom-[-10px] sm:bottom-0 left-1/2 -translate-x-1/2 w-[360px] sm:w-[520px] md:w-[640px] z-20 pointer-events-none"
        />

        <img
          src={frameImage}
          alt="frame"
          className="absolute bottom-[-33px] sm:bottom-[-44px] left-0 w-full z-30 pointer-events-none"
        />
      </div>
    </section>
  );
}