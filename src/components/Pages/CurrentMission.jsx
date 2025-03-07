function CurrentMission() {
    return (
      <div>
        <div className="bg-slate-800 text-white py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Nebula</h1>
          <p className="max-w-xl mx-auto">Our current high-altitude balloon mission</p>
        </div>
        
        <div className="container mx-auto max-w-4xl py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Mission Overview</h2>
              <p className="mb-4">Project Nebula aims to launch a high-altitude balloon to the edge of space, collecting valuable atmospheric data and capturing stunning imagery of Earth from near-space.</p>
              <p>The payload includes multiple sensors for temperature, pressure, humidity, and radiation levels, as well as cameras for video and still photography.</p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 italic">Mission Concept Image</p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Mission Timeline</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-600 rounded-full w-8 h-8"></div>
                  <div className="h-full w-0.5 bg-blue-200"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Planning & Design</h3>
                  <p className="text-gray-600">February 2025 - March 2025</p>
                  <p className="mt-2">Finalizing payload specifications and balloon parameters.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-600 rounded-full w-8 h-8"></div>
                  <div className="h-full w-0.5 bg-blue-200"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Construction</h3>
                  <p className="text-gray-600">April 2025 - May 2025</p>
                  <p className="mt-2">Building the payload housing, integrating electronics and testing systems.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-600 rounded-full w-8 h-8"></div>
                  <div className="h-full w-0.5 bg-blue-200"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Testing</h3>
                  <p className="text-gray-600">June 2025</p>
                  <p className="mt-2">Ground testing of all systems and simulation of flight conditions.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="bg-blue-600 rounded-full w-8 h-8"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Launch</h3>
                  <p className="text-gray-600">July 2025</p>
                  <p className="mt-2">Weather-dependent balloon launch and mission operation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Team Members</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Alex Thompson</h3>
                <p className="text-gray-600">Project Lead</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Jamie Rodriguez</h3>
                <p className="text-gray-600">Electronics Engineer</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Sam Wilson</h3>
                <p className="text-gray-600">Payload Specialist</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="mb-4">We're looking for team members to help with various aspects of Project Nebula.</p>
            <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block">
              Join the Mission
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default CurrentMission;