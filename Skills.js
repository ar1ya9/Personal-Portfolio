import React from 'react';

function Skills() {
  return (
    <section id="skills" className="h-screen bg-green-100 p-8">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 text-center">My Skills</h2>

        {/* Skills List */}
        <div className="space-y-8">
          {/* Skill 1: React */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">React</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-red-500 h-6 rounded-full text-white text-center transition-all duration-500 ease-in-out"
                style={{ width: '80%' }}
                aria-label="React skill level"
              >
                80%
              </div>
            </div>
          </div>

          {/* Skill 2: Python */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Python</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-green-500 h-6 rounded-full text-white text-center transition-all duration-500 ease-in-out"
                style={{ width: '70%' }}
                aria-label="Python skill level"
              >
                70%
              </div>
            </div>
          </div>

          {/* Skill 3: Tailwind CSS */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-purple-500 h-6 rounded-full text-white text-center transition-all duration-500 ease-in-out"
                style={{ width: '65%' }}
                aria-label="Tailwind CSS skill level"
              >
                65%
              </div>
            </div>
          </div>

          {/* Skill 4: Machine Learning */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Machine Learning</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-yellow-500 h-6 rounded-full text-white text-center transition-all duration-500 ease-in-out"
                style={{ width: '60%' }}
                aria-label="Machine Learning skill level"
              >
                60%
              </div>
            </div>
          </div>

          {/* Skill 5: JavaScript */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">JavaScript</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-orange-500 h-6 rounded-full text-white text-center transition-all duration-500 ease-in-out"
                style={{ width: '75%' }}
                aria-label="JavaScript skill level"
              >
                75%
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">C</h3>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-red-500 h-6 rounded-full text-white text-center transition-all duration-500 ease-in-out"
                style={{ width: '80%' }}
                aria-label="React skill level"
              >
                80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
