import React, { useState } from 'react';

const DonationModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsappNumber: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbz779xrRLb5iHrN-GDjNlkh3wH0ugBs_POEcfztKEDrD5nTv11kWnN5Ls8tfTyw7OC3/exec",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);

                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: "",
                        email: "",
                        whatsappNumber: "",
                    });
                    onClose();
                }, 3000);
            } else {
                alert("Failed to submit. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-[420px] overflow-hidden animate-popup">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Content */}
                <div className="p-8 sm:p-10">
                    {!isSubmitted ? (
                        <>
                            <div className="text-center mb-8">
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-3">
                                    Request a Callback
                                </h2>
                                <p className="text-gray-600 text-base">
                                    Interested in making a donation? Fill in your details below and we'll get in touch with you.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="modal-name" className="block text-base font-semibold text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="modal-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="modal-email" className="block text-base font-semibold text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="modal-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="modal-whatsapp" className="block text-base font-semibold text-gray-700 mb-1">
                                        WhatsApp Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="modal-whatsapp"
                                        name="whatsappNumber"
                                        value={formData.whatsappNumber}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A82228] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#A82228] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#8a1c22] transition-colors shadow-lg hover:shadow-xl active:scale-[0.98] transform"
                                >
                                    Submit
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="mb-6">
                                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-4">
                                Thank You!
                            </h2>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Our team will contact you soon.
                            </p>
                        </div>
                    )}
                </div>

                {/* Bottom Decorative Element */}
                <div className="h-2 bg-[#A82228]"></div>
            </div>
        </div>
    );
};

export default DonationModal;
