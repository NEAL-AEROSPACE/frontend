import { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    major: '',
    year: '',
    interests: [],
    experience: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedInterests = [...formData.interests];
    
    if (checked) {
      updatedInterests.push(value);
    } else {
      updatedInterests = updatedInterests.filter(interest => interest !== value);
    }
    
    setFormData({
      ...formData,
      interests: updatedInterests
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your server
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for your interest in joining NEAL Aerospace! We will be in touch soon.');
  };

  return (
    <div>
      <div className="bg-slate-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="max-w-xl mx-auto">Become a part of the NEAL Aerospace community</p>
      </div>
      
      <div className="container mx-auto max-w-3xl py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">Major/Field of Study *</label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year/Grade *</label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Year</option>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="Graduate">Graduate Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                  <input
                    type="checkbox"
                    id="rocketry"
                    name="interests"
                    value="Rocketry"
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="rocketry">Rocketry</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="electronics"
                    name="interests"
                    value="Electronics"
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="electronics">Electronics & Avionics</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="programming"
                    name="interests"
                    value="Programming"
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="programming">Programming & Software</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="mechanical"
                    name="interests"
                    value="Mechanical"
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="mechanical">Mechanical Design</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="outreach"
                    name="interests"
                    value="Outreach"
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="outreach">Outreach & Events</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="research"
                    name="interests"
                    value="Research"
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="research">Research & Documentation</label>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Experience Level</option>
                <option value="None">None - I'm excited to learn!</option>
                <option value="Beginner">Beginner - Some basic knowledge</option>
                <option value="Intermediate">Intermediate - Previous projects</option>
                <option value="Advanced">Advanced - Significant experience</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join? (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;