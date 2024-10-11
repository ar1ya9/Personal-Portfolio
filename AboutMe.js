import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="h-screen bg-gray-100 p-8">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* About Me Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 text-center">About Me</h2>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-xl mx-auto mb-8">
          I am a passionate web developer and researcher with a focus on machine learning and 3D animation.
        </p>

        {/* Educational Background Subsection */}
        <div className="bg-white shadow-lg p-6 rounded-lg mb-8 transition-transform transform hover:scale-105">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Educational Background</h3>
          <p className="text-lg text-gray-600">
            I am currently pursuing my BSc in Computer Science & Engineering at Green University of Bangladesh. 
            My academic interests include Machine Learning, Data Mining, and Artificial Intelligence. 
            I’m also conducting research on 3D Animation for Bangla Sign Language using CNN and Blender.
          </p>
        </div>

        {/* Interest in Life Subsection */}
        <div className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Interest in Life</h3>
          <p className="text-lg text-gray-600">
            Aside from academics, I enjoy learning about new technologies, playing online games, and watching 
            movies and drama series from different countries. I’m constantly looking for ways to merge my technical 
            skills with creative pursuits like animation and web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
