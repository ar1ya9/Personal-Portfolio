import React, { useEffect, useState } from 'react';

function ProfilePic() {
    const designations = [
        "BSc in CSE",
        "Researcher",
        "Web Developer"
    ];

    const [currentDesignation, setCurrentDesignation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDesignation(prev => (prev + 1) % designations.length);
        }, 2000); // Change designation every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="profile" className="relative h-screen bg-white">
            <div className="absolute inset-0 flex items-center justify-between px-16">
                {/* Left Side - Profile Picture */}
                <div className="w-1/3 flex justify-center">
                    <div className="rounded-full overflow-hidden border-4 border-blue-500">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="w-40 h-40 md:w-64 md:h-64 object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Name and Designation */}
                <div className="w-1/2 text-center flex flex-col items-start">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 shadow-md transition-all duration-300 -translate-y-2">
                        MD. ALMAHMUD
                    </h1>
                    <p
                        className={`text-2xl md:text-3xl text-gray-600 font-bold shadow-lg transition-transform duration-500 transform hover:scale-105`}
                        style={{
                            animation: 'fadeIn 0.8s ease-in-out',
                            color: currentDesignation === 0 ? 'blue' : currentDesignation === 1 ? 'green' : 'red',
                        }}
                    >
                        {designations[currentDesignation]}
                    </p>
                </div>
            </div>

            {/* Download Buttons - Centered 20% from bottom */}
            <div className="absolute inset-x-0 bottom-[15%] flex justify-center space-x-4">
                <a
                    href="/Resume.pdf"
                    download="Almahmud_CV.pdf"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 16l4-4m0 0l-4-4m4 4H4" />
                    </svg>
                    Download CV
                </a>

                <a
                    href="/formal.pdf"
                    download="Almahmud_FormalLetter.pdf"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-200 flex items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 16l4-4m0 0l-4-4m4 4H4" />
                    </svg>
                    Download Formal Letter
                </a>
            </div>

            {/* Call and Email Buttons - 40% from center, 25% from bottom */}
            <div className="absolute bottom-[30%] right-[12%] flex space-x-5">
                {/* Call Button */}
                <a
                    href="tel:+8801764230549"
                    className="bg-green-500 text-white p-7 rounded-full hover:bg-green-600 transition duration-200 flex items-center justify-center"
                >
                    <i className="fas fa-phone-alt fa-lg"></i>
                </a>

                {/* Email Button */}
                <a
                    href="mailto:arbinariyan49@gmail.com"
                    className="bg-blue-500 text-white p-7 rounded-full hover:bg-blue-600 transition duration-200 flex items-center justify-center"
                >
                    <i className="fas fa-envelope fa-lg"></i>
                </a>
            </div>

            {/* CSS Animation */}
            <style>{`
                @keyframes fadeIn {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
            `}</style>
        </section>
    );
}

export default ProfilePic;
