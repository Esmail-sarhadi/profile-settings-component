import React, { useState } from 'react';
import { ArrowLeft, Save, Camera, Mail, Phone, MapPin, Calendar, User, Info } from 'lucide-react';

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

  const [activeSection, setActiveSection] = useState('personal');

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
    <div className="min-h-screen relative bg-gradient-to-b from-[#8BA3BC] to-[#1B3A5C]">
      {/* Decorative Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#963A24] via-[#E86C3A] to-[#F5B03A] opacity-70" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-10" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button className="flex items-center text-white hover:text-[#F5B03A] transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back to Home</span>
          </button>
          <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
          <div className="w-24"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-6 pt-10">
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-[#1B3A5C] to-[#963A24]">
            <div className="absolute -bottom-16 left-6 flex items-end space-x-6">
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur overflow-hidden border-4 border-white shadow-xl">
                  {formData.profileImage ? (
                    <img
                      src={formData.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#8BA3BC] to-[#1B3A5C]">
                      <User className="w-16 h-16 text-white/50" />
                    </div>
                  )}
                </div>
                <label className="absolute bottom-2 right-2 w-10 h-10 bg-[#F5B03A] text-white rounded-xl flex items-center justify-center cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-[#E86C3A]">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <Camera className="w-5 h-5" />
                </label>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
                <p className="text-white/70">Update your personal information</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-20 px-6">
            <div className="flex space-x-6 border-b border-white/10">
              <button
                onClick={() => setActiveSection('personal')}
                className={`px-4 py-3 font-medium transition-colors duration-300 ${
                  activeSection === 'personal'
                    ? 'text-[#F5B03A] border-b-2 border-[#F5B03A]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Personal Info
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`px-4 py-3 font-medium transition-colors duration-300 ${
                  activeSection === 'contact'
                    ? 'text-[#F5B03A] border-b-2 border-[#F5B03A]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Contact Details
              </button>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {activeSection === 'personal' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Username */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-white/70 mb-2">Username</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300"
                        placeholder="Enter username"
                      />
                      <User className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300"
                        placeholder="Enter full name"
                      />
                      <User className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>

                  {/* Birth Date */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-white/70 mb-2">Birth Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300"
                      />
                      <Calendar className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-white/70 mb-2">Gender</label>
                    <div className="relative">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300 appearance-none"
                      >
                        <option value="" className="bg-[#1B3A5C]">Select Gender</option>
                        <option value="male" className="bg-[#1B3A5C]">Male</option>
                        <option value="female" className="bg-[#1B3A5C]">Female</option>
                        <option value="other" className="bg-[#1B3A5C]">Other</option>
                      </select>
                      <User className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">Bio</label>
                    <div className="relative">
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300"
                        placeholder="Tell us about yourself..."
                      />
                      <Info className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300"
                        placeholder="Enter email"
                      />
                      <Mail className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-white/70 mb-2">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300"
                        placeholder="Enter phone number"
                      />
                      <Phone className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">City</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-colors duration-300"
                        placeholder="Enter city"
                      />
                      <MapPin className="absolute right-4 top-3.5 w-5 h-5 text-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-white/10">
              <button
                type="submit"
                className="flex items-center px-8 py-3 bg-gradient-to-r from-[#F5B03A] to-[#E86C3A] text-white rounded-xl font-medium shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F5B03A] focus:ring-offset-2 focus:ring-offset-[#1B3A5C]"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
