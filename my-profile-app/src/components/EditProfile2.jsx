import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    bio: '',
    birthDate: '',
    city: '',
    phone: '',
    gender: '',
    profileImage: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profileImage: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#8BA3BC]" /> {/* Light blue sky */}
        <div className="absolute bottom-0 h-1/2 bg-[#1B3A5C]" /> {/* Dark blue horizon */}
        <div className="absolute bottom-0 h-[30%] bg-[#963A24]" /> {/* Dark red/burgundy stripe */}
        <div className="absolute bottom-0 h-[20%] bg-[#E86C3A]" /> {/* Orange stripe */}
        <div className="absolute bottom-0 h-[10%] bg-[#F5B03A]" /> {/* Yellow stripe */}
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <button className="flex items-center text-[#1B3A5C] hover:text-[#8BA3BC]">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-xl font-semibold text-[#1B3A5C]">Edit Profile</h1>
          <div className="w-12"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 space-y-6">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#8BA3BC]/20 overflow-hidden">
                {formData.profileImage ? (
                  <img
                    src={formData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#1B3A5C]">
                    No Image
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-[#1B3A5C] text-white p-2 rounded-full cursor-pointer hover:bg-[#963A24]">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                +
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={3}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              />
            </div>

            {/* Birth Date */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-[#1B3A5C]">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-[#8BA3BC] px-3 py-2 focus:border-[#1B3A5C] focus:ring-[#1B3A5C]"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center px-6 py-2 bg-[#1B3A5C] text-white rounded-md hover:bg-[#963A24] focus:outline-none focus:ring-2 focus:ring-[#1B3A5C] focus:ring-offset-2"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
