import React from 'react';

function Experience() {
    return (
        <section id="experience" className="h-screen bg-orange-200 p-8">
            <div className="container mx-auto h-full flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center">Experience & Workshops</h2>

                {/* Work Experience Subsection */}
                <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Work Experience</h3>
                    <ul className="list-disc list-inside">
                        <li className="text-lg text-gray-600 mb-2">No formal work experience yet, but actively leading group projects and technical teams in university assignments.</li>
                        <li className="text-lg text-gray-600 mb-2">Freelance Developer - Working on freelance projects focusing on web development and UI design.</li>
                    </ul>
                </div>

                {/* Workshops Subsection */}
                <div className="bg-white shadow-lg p-6 rounded-md">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Workshops</h3>
                    <ul className="list-disc list-inside">
                        <li className="text-lg text-gray-600 mb-2">
                            Professional Life Skills Development (PLSD) - Participated in a hands-on Non-Credit Course on the basics of Professional Training and its applications.
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                Academic Course
                            </button>
                        </li>
                        <li className="text-lg text-gray-600 mb-2">
                            Python Programming Course (Batch-4) - Digital Skills Development Program for Python.

                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                On-Going Course
                            </button>

                        </li>
                        <li className="text-lg text-gray-600 mb-2">
                            Frontend Development Bootcamp - Completed a bootcamp focusing on React Frontend development.
                            <a
                                href="/react.png" // Replace with the actual path to your certificate
                                className="inline-block mt-2 text-blue-500 hover:underline"
                                download
                            >
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                    Download Certificate
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
