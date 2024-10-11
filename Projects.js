import React from 'react';

function Projects() {
  return (
    <section id="projects" className="h-screen bg-green-200 p-8">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* Projects Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center">My Projects</h2>

        {/* Ongoing Works Subsection */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Ongoing Works</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-100 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">3D Animation for Bangla Sign Language</h4>
              <p className="text-gray-600 mb-4">
                Developing a 3D animation system using CNN and Blender to convert Bangla speech into sign language.
              </p>
              <a
                href="https://github.com/ar1ya9?tab=repositories" // Replace with actual repo link
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Repository
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Private University Application System</h4>
              <p className="text-gray-600 mb-4">
                Collaborating on a web-based application system to streamline admissions for private universities.
              </p>
              <a
                href="https://github.com/ar1ya9?tab=repositories" // Replace with actual repo link
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Complete Projects Subsection */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Complete Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Complete Project 1 */}
            <div className="bg-gray-100 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Personal Portfolio Website</h4>
              <p className="text-gray-600 mb-4">
                Built a personal website using React and Tailwind CSS to showcase my skills, projects, and academic background.
              </p>
              <a
                href="https://your-portfolio-link.com" // Replace with your live link
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Website
              </a>
              <a
                href="https://github.com/ar1ya9?tab=repositories" // Replace with actual repo link
                className="block text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Repository
              </a>
            </div>

            {/* Complete Project 2 */}
            <div className="bg-gray-100 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">CNN Model for Handwritten Bangla Letter Classification</h4>
              <p className="text-gray-600 mb-4">
                Implemented a machine learning model to classifying and Predict Bangla Letter from Bangla Script using Python and Scikit-learn.
              </p>
              <a
                href="https://github.com/ar1ya9?tab=repositories" // Replace with actual repo link
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
