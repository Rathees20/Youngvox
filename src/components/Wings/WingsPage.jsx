import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import wingBanner from '../../assets/wing banner.png';
import wing1Image from '../../assets/wing1.png';
import wing2Image from '../../assets/wing2.png';
import wing3Image from '../../assets/wing3.png';
import wing4Image from '../../assets/wing4.png';
import wing5Image from '../../assets/wing5.png';
import wingLBanner from '../../assets/wingLbanner.png';
import vectorImage from '../../assets/our vision frame red.png';
import containerIcon from '../../assets/icons/Container.png';
import container01Icon from '../../assets/icons/Container01.png';
import maskGroupIcon from '../../assets/icons/Mask group.png';
import maskGroup1Icon from '../../assets/icons/Mask group1.png';
import maskGroup2Icon from '../../assets/icons/Mask group2.png';
import drSaranyaImage from '../../assets/c2.png';
import banupriyaImage from '../../assets/c5.jpeg';
import kapilashImage from '../../assets/c7.jpeg';
import siyanaSalimImage from '../../assets/c8.jpeg';
import userPlaceholder from '../../assets/icons/Mask group.png'; // Using existing icon as placeholder for silhouettes
import lsImage from '../../assets/ls.jpeg';
import { useNavigate } from 'react-router-dom';
const LeaderNode = ({ image, name, title, className = "" }) => (
  <div className={`flex items-center gap-3 bg-[#802525] rounded-full py-2 pl-2 pr-6 shadow-md w-full max-w-[360px] z-10 ${className}`}>
    <div className="w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0 bg-white">
      <img src={image} alt={name || title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col items-start text-left leading-tight">
      {name && <h4 className="text-white text-[13px] font-bold leading-tight">{name}</h4>}
      <p className="text-white/90 text-[12px] leading-tight font-semibold">
        {title}
      </p>
    </div>
  </div>
);

// Desktop org-chart helpers (to match the reference image geometry).
// Layout numbers are tuned so the spine sits exactly at the right edge of the left pill.
const ORG_PILL_W = 360;
const ORG_SPINE_GAP = 28; // distance between left pill edge and right pill edge area
const ORG_SPINE_HALF = ORG_SPINE_GAP / 2; // 14px
const ORG_RIGHT_PILL_W = 360;

const OrgRowPair = ({ left, right }) => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-[360px_28px_360px] items-center">
    {/* Left column */}
    <div className="flex justify-center sm:justify-end">
      <div className="relative">
        <span className="hidden sm:block absolute right-[-14px] top-1/2 h-px w-[14px] bg-black/25" />
        {left}
      </div>
    </div>

    {/* Center spine column */}
    <div className="relative hidden sm:flex justify-center">
      <span className="absolute left-1/2 top-[-28px] bottom-[-28px] w-px -translate-x-1/2 bg-black/70" />
    </div>

    {/* Right column */}
    <div className="flex justify-center sm:justify-start">
      <div className="relative">
        <span className="hidden sm:block absolute left-[-14px] top-1/2 h-px w-[14px] bg-black/25" />
        {right}
      </div>
    </div>
  </div>
);

const OrgRowLeftOnly = ({ node, isLast = false }) => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-[360px_28px_360px] items-center">
    {/* Left column */}
    <div className="flex justify-center sm:justify-end">
      <div className="relative">
        {/* Horizontal connector from pill to spine */}
        <span className="hidden sm:block absolute right-[-14px] top-1/2 h-px w-[14px] bg-black/25" />
        <span
          className="hidden sm:block absolute right-[-14px] w-px bg-black/25"
          style={{ top: '-28px', bottom: isLast ? '-10px' : '-28px' }}
        />
        {node}
      </div>
    </div>

    {/* Center spine column */}
    <div className="relative hidden sm:flex justify-center">
      <span
        className="absolute left-1/2 w-px -translate-x-1/2 bg-black/70"
        style={{ top: '-28px', bottom: isLast ? '-10px' : '-28px' }}
      />
    </div>

    {/* Right column intentionally empty to mirror the reference */}
    <div className="hidden sm:block" />
  </div>
);

const WingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    email: '',
    phoneNumber: '',
    location: '',
    message: '',
    notRobot: false
  });

  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  // Step content for "How it works" section
  const stepContent = {
    1: "Student-led leadership structure - Every activity is planned, and executed by student leaders from each wing.",
    2: "Monthly digital campaigns - Students create awareness through posters, videos, reels, and school-wide messages.",
    3: "Annual events and showcases - Includes gamified activities that make learning engaging and fun.",
    4: "Collaboration with mentors and external experts - Teacher mentors and external professionals guide students through workshops, sessions, and project support"
  };

  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ once: true });
  const [leadershipRef, leadershipVisible] = useScrollAnimation({ once: true });
  const [wing1Ref, wing1Visible] = useScrollAnimation({ once: true });
  const [wing2Ref, wing2Visible] = useScrollAnimation({ once: true });
  const [wing3Ref, wing3Visible] = useScrollAnimation({ once: true });
  const [wing4Ref, wing4Visible] = useScrollAnimation({ once: true });
  const [howItWorksRef, howItWorksVisible] = useScrollAnimation({ once: true });
  const [formRef, formVisible] = useScrollAnimation({ once: true });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className={`${heroVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1A2B3C] mb-6 uppercase tracking-tight">
              YOUNGVOX - WINGS
            </h1>
            
          </div>

          <div className={`max-w-7xl mx-auto space-y-8 ${heroVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-7xl mx-auto">
              YoungVox nurtures student leadership through a structured School Chapter model powered by four dynamic wings. Each wing is led by students, supported by a core leadership team and teacher mentors, ensuring meaningful engagement, collaboration, and real world learning.
            </p>
            <button onClick={() => navigate('/joinyoung')} className="bg-[#A82228] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8a1c22] transition-all transform hover:scale-105 shadow-md">
              Join Now
            </button>
          </div>
        </div>

        {/* Hero Image with Paint Effect */}
        <div className={`relative w-full ${heroVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
          <div className="relative">
            <img
              src={wingBanner}
              alt="YoungVox students"
              className="w-full h-auto min-h-[400px] object-cover"
            />
            {/* Top Fade Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

            {/* Crack/Tear Design at Bottom
            <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10">
              <img
                src={vectorImage}
                alt="Crack design"
                className="w-full h-auto object-cover scale-x-110"
                style={{ display: 'block' }}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Leadership Structure Section */}
      <section ref={leadershipRef} className="py-10 lg:py-14" style={{ backgroundColor: '#FFF9F0' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-8 ${leadershipVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A2B3C] mb-2">
              Leadership Structure
            </h2>
            <p className="text-gray-500 text-[20px] font-medium max-w-2xl mx-auto">
              A collaborative model where students lead, learn, and grow together
            </p>
          </div>

          {/* Org Chart Container - Hidden */}
          <div className={`hidden ${leadershipVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            {/* Desktop: fixed-position layout (pixel-accurate) */}
            <div className="hidden sm:block">
              <div className="relative mx-auto w-[780px] bg-transparent">
                {/* CONNECTOR LINES */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  width="780"
                  height="920"
                  viewBox="0 0 780 920"
                  fill="none"
                >
                  {/* Top spine (center) */}
                  <path d="M390 135 V 535" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Level 1 connectors */}
                  <path d="M375 135 H 405" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Level 2 connectors */}
                  <path d="M375 235 H 405" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Left-stack connectors (Level 3/4/5) */}
                  <path d="M390 335 H 375" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />
                  <path d="M390 415 H 375" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />
                  <path d="M390 495 H 375" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Outer School box */}
                  <rect x="30" y="555" width="720" height="340" stroke="rgba(0,0,0,0.75)" strokeWidth="1" fill="transparent" />

                  {/* Connect district -> box spine */}
                  <path d="M390 535 V 555" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Inside box: Chief <-> Teacher mentor horizontal connection */}
                  <path d="M375 625 H 405" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Inside box: Spine from Chief row down to branching point */}
                  <path d="M390 625 V 675" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Secretary/Treasurer branching lines */}
                  <path d="M170 675 H 610" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />
                  <path d="M170 675 V 690" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />
                  <path d="M610 675 V 690" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />

                  {/* Inside box: Lower spine from branching point through Wing Leaders to Students */}
                  <path d="M390 675 V 845" stroke="rgba(0,0,0,0.7)" strokeWidth="1" />
                </svg>

                {/* NODES (absolute positions) */}
                {/* Level 1: Founder (Left) & Advisors (Right) */}
                <div className="absolute left-[15px] top-[105px]">
                  <LeaderNode image={drSaranyaImage} name="Dr. Saranya. T. Jaikumar" title="Founder & President" />
                </div>
                <div className="absolute left-[405px] top-[105px]">
                  <LeaderNode image={userPlaceholder} title="Advisors & Mentors" />
                </div>

                {/* Level 2: COO (Left) & Director (Right) */}
                <div className="absolute left-[15px] top-[205px]">
                  <LeaderNode image={banupriyaImage} name="Banupriya V" title="Chief Operating Officer (COO)" />
                </div>
                <div className="absolute left-[405px] top-[205px]">
                  <LeaderNode image={kapilashImage} name="Kapilash G" title="Director - Business Strategy & Creative Communications" />
                </div>

                {/* Level 3/4/5 (Left Stack, connected to spine) */}
                <div className="absolute left-[15px] top-[305px]">
                  <LeaderNode image={siyanaSalimImage} name="Siyana Salim Vaidyar" title="National Program Coordinator" />
                </div>
                <div className="absolute left-[15px] top-[385px]">
                  <LeaderNode image={userPlaceholder} title="State Level Coordinator" />
                </div>
                <div className="absolute left-[15px] top-[465px]">
                  <LeaderNode image={userPlaceholder} title="District Level Coordinator" />
                </div>

                {/* School box nodes */}
                {/* Row 1 in box: Chief (Left) & Teacher Mentor (Right) */}
                <div className="absolute left-[15px] top-[595px]">
                  <LeaderNode image={userPlaceholder} title="School Chapter Chief" />
                </div>
                <div className="absolute left-[405px] top-[595px]">
                  <LeaderNode image={userPlaceholder} title="School Teacher Mentor" />
                </div>

                {/* Row 2 in box: Secretary (Left of frame) & Treasurer (Right of frame) */}
                <div className="absolute left-[50px] top-[690px]">
                  <LeaderNode image={userPlaceholder} title="Secretary" className="max-w-[240px]" />
                </div>
                <div className="absolute left-[490px] top-[690px]">
                  <LeaderNode image={userPlaceholder} title="Treasurer" className="max-w-[240px]" />
                </div>

                {/* Row 3/4 in box: Wing Leaders (Center) & Students (Center) */}
                <div className="absolute left-[260px] top-[780px]">
                  <LeaderNode image={userPlaceholder} title="Wing Leaders" className="max-w-[260px]" />
                </div>
                <div className="absolute left-[260px] top-[845px]">
                  <LeaderNode image={userPlaceholder} title="School Students" className="max-w-[260px]" />
                </div>

                {/* Spacer to give the container height */}
                <div className="h-[920px]" />
              </div>
            </div>

            {/* Mobile: keep simple stacked layout */}
            <div className="sm:hidden w-full flex flex-col items-center gap-4">
              <LeaderNode image={drSaranyaImage} name="Dr. Saranya. T. Jaikumar" title="Founder & President" />
              <LeaderNode image={userPlaceholder} title="Advisors & Mentors" />
              <LeaderNode image={banupriyaImage} name="Banupriya V" title="Chief Operating Officer (COO)" />
              <LeaderNode image={kapilashImage} name="Kapilash G" title="Director - Business Strategy & Creative Communications" />
              <LeaderNode image={siyanaSalimImage} name="Siyana Salim Vaidyar" title="National Program Coordinator" />
              <LeaderNode image={userPlaceholder} title="State Level Coordinator" />
              <LeaderNode image={userPlaceholder} title="District Level Coordinator" />
              <div className="w-full border border-black/60 rounded-[8px] p-4">
                <div className="flex flex-col gap-3 items-center">
                  <LeaderNode image={userPlaceholder} title="School Chapter Chief" />
                  <LeaderNode image={userPlaceholder} title="School Teacher Mentor" />
                  <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
                    <LeaderNode image={userPlaceholder} title="Secretary" className="max-w-[240px]" />
                    <LeaderNode image={userPlaceholder} title="Treasurer" className="max-w-[240px]" />
                  </div>
                  <LeaderNode image={userPlaceholder} title="Wing Leaders" className="max-w-[260px]" />
                  <LeaderNode image={userPlaceholder} title="School Students" className="max-w-[260px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Structure Image */}
          <div className={`${leadershipVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <div className="flex justify-center">
              <img
                src={lsImage}
                alt="Leadership Structure"
                className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wings Grid Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header (matches reference layout) */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A2B3C] mb-3">
                YoungVox Wings
              </h2>
              <p className="text-gray-600 text-[20px] font-medium leading-relaxed">
                YoungVox operates through 4 dynamic wings that empower learners to lead, create, collaborate, and drive real impact within their school and community.
              </p>
            </div>

            {/* Theme badge (Now in header row for better alignment) */}
            <div className="flex lg:justify-end justify-center lg:pr-20">
              <div className="inline-flex flex-col items-center justify-center text-center rounded-md bg-[#FFF6E3] px-6 py-3">
                <div className="text-base text-lg font-bold text-[#A82228] leading-relaxed">
                  Overall theme for 2026-Empower Future
                </div>
                <div className="text-base text-lg font-bold text-[#A82228] leading-relaxed">
                  Begin Today, For Better Tomorrow
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Academic & Career Guidance Wing */}
            <div ref={wing1Ref} className={`md:row-start-2 p-6 lg:p-10 rounded-[2rem] bg-[#FFF6E3] shadow-sm transition-all hover:shadow-md ${wing1Visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white rounded-2xl px-4 py-2 shadow-sm flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">2026 Theme</span>
                  <span className="text-[11px] font-extrabold text-[#1A2B3C]">Student to Professional</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing1Image} alt="Academic & Career Guidance" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-3xl font-bold text-black mb-1">Academic & Career Guidance Wing</h2>
              <p className="text-[13px] text-gray-600 mb-4 font-medium">[SDG 4 – Quality Education]</p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Helps students discover academic interests, plan career paths, and access learning resources.
              </p>
            </div>

            {/* Student Wellbeing Wing */}
            <div ref={wing2Ref} className={`md:row-start-2 p-6 lg:p-10 rounded-[2rem] bg-[#A82228] shadow-sm transition-all hover:shadow-md ${wing2Visible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white rounded-2xl px-4 py-2 shadow-sm flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">2026 Theme</span>
                  <span className="text-[11px] font-extrabold text-[#1A2B3C]">Digital Detox</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing2Image} alt="Student Wellbeing" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-3xl font-bold text-white mb-1">Student Wellbeing Wing</h2>
              <p className="text-[13px] text-white/80 mb-4 font-medium">[SDG 3 – Good Health & Well-being]</p>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Promotes emotional, mental, and physical wellbeing through psychoeducation, awareness sessions, and healthy habit-building activities.
              </p>
            </div>

            {/* Child Rights & Social Justice Wing */}
            <div ref={wing3Ref} className={`md:row-start-3 p-6 lg:p-10 rounded-[2rem] bg-[#A82228] shadow-sm transition-all hover:shadow-md ${wing3Visible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white rounded-2xl px-4 py-2 shadow-sm flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">2026 Theme</span>
                  <span className="text-[11px] font-extrabold text-[#1A2B3C]">Speak Up</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing3Image} alt="Child Rights & Social Justice" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-3xl font-bold text-white mb-1">Child Rights & Social Justice Wing</h2>
              <p className="text-[13px] text-white/80 mb-4 font-medium">[SDG 16 – Peace, Justice & Strong Institutions]</p>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Builds awareness on children's rights, protection, equality, safety, and safety through campaigns and forums.
              </p>
            </div>

            {/* Community Outreach & Service Wing */}
            <div ref={wing4Ref} className={`md:row-start-3 p-6 lg:p-10 rounded-[2rem] bg-[#FFF6E3] shadow-sm transition-all hover:shadow-md ${wing4Visible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
              <div className="relative mb-6">
                <div className="absolute top-4 left-4 z-10 bg-white rounded-2xl px-4 py-2 shadow-sm flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">2026 Theme</span>
                  <span className="text-[11px] font-extrabold text-[#1A2B3C]">Blue Earth, Clean Earth</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
                  <img src={wing4Image} alt="Community Outreach & Service" className="w-full h-full object-cover" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-3xl font-bold text-black mb-1">Community Outreach & Service Wing</h2>
              <p className="text-[13px] text-gray-600 mb-4 font-medium">[SDG 14 – Life Below Water]</p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Leads eco-friendly initiatives, environmental awareness drives, and community service to promote sustainability and civic responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section ref={howItWorksRef} className="pt-2 pb-14 lg:pt-4 lg:pb-20" style={{ backgroundColor: '#FFF9F0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left - Content */}
            <div className={`space-y-6 pt-4 lg:pt-8 ${howItWorksVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A2B3C] mb-6 leading-tight">
                <span className="block lg:whitespace-nowrap">Student-Led Experiential</span>
                <span className="block lg:whitespace-nowrap">Leadership Framework</span>
              </h2>

              {/* Step Indicators with Horizontal Line */}
              <div className="relative w-full max-w-sm pt-4 mb-10">
                {/* Horizontal Line behind dots */}
                <div className="absolute left-0 right-0 top-[40px] h-[1px] bg-gray-200" />

                <div className="relative flex justify-between">
                  {[1, 2, 3, 4].map((step) => (
                    <button
                      key={step}
                      type="button"
                      onClick={() => setCurrentStep(step)}
                      className="flex flex-col items-center group transition-all duration-300"
                    >
                      {/* Number */}
                      <span className={`text-[15px] mb-3 font-bold transition-colors ${currentStep === step ? 'text-[#1A2B3C]' : 'text-gray-400'}`}>
                        {String(step).padStart(2, '0')}
                      </span>
                      {/* Dot */}
                      <div className={`relative z-10 w-[9px] h-[9px] rounded-full transition-all duration-300 ${currentStep === step
                        ? 'bg-[#A82228] scale-125 shadow-sm'
                        : 'bg-gray-300 group-hover:bg-gray-400'
                        }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Descriptive Text - Aligned with timeline */}
              <div className="min-h-[100px] mb-10">
                <p className="text-lg text-gray-700 text-justify leading-relaxed max-w-sm transition-all duration-300">
                  {stepContent[currentStep]}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm group"
                  aria-label="Previous step"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="w-10 h-10 rounded-full bg-[#A82228] flex items-center justify-center hover:bg-[#8e1d22] transition-all shadow-md"
                  aria-label="Next step"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div className={`${howItWorksVisible ? 'animate-fade-in-right animate-delay-200' : 'opacity-0'}`}>
              <img
                src={wing5Image}
                alt="How it works"
                className="w-full h-auto rounded-lg shadow-lg hover-scale transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Bottom Banner Image */}
      <section className="w-full relative overflow-hidden">
        <div className="relative">
          <img
            src={wingLBanner}
            alt="YoungVox students"
            className="w-full h-auto aspect-[16/9] sm:aspect-auto sm:h-[600px] lg:h-[700px] object-cover object-center"
          />

          {/* Crack/Tear Design at Bottom
          <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10">
            <img
              src={vectorImage}
              alt="Crack design"
              className="w-full h-auto object-cover scale-x-110"
              style={{ display: 'block' }}
            />
          </div> */}
        </div>
      </section>

      {/* Footer Section with proper z-index */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
};

export default WingsPage;


