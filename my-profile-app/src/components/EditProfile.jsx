import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Camera, Mail, Phone, MapPin, Calendar, User, Info, ChevronRight, Star, Edit3 } from 'lucide-react';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-[#1B3A5C] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8BA3BC] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#963A24] via-[#E86C3A] to-[#F5B03A] opacity-30" />
        <div className="animate-pulse absolute top-20 left-10 w-72 h-72 bg-[#F5B03A] rounded-full filter blur-3xl opacity-20" />
        <div className="animate-pulse absolute top-40 right-10 w-96 h-96 bg-[#E86C3A] rounded-full filter blur-3xl opacity-20" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1B3A5C]/80 backdrop-blur-lg shadow-lg' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button className="group flex items-center space-x-2 text-white/80 hover:text-[#F5B03A] transition-all duration-300">
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back</span>
          </button>
          <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          {/* Profile Header Card */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A5C] to-[#963A24] opacity-50 rounded-3xl blur" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-8">
                <div className="relative group">
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-white/30 group-hover:border-[#F5B03A] transition-colors duration-300 shadow-2xl">
                    {formData.profileImage ? (
                      <img
                        src={formData.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#8BA3BC]/30 to-[#1B3A5C]/30">
                        <User className="w-20 h-20 text-white/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <label className="cursor-pointer transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Camera className="w-8 h-8 text-white" />
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#F5B03A] blur opacity-50" />
                      <label className="relative w-12 h-12 bg-gradient-to-r from-[#F5B03A] to-[#E86C3A] rounded-xl flex items-center justify-center cursor-pointer shadow-lg transform hover:scale-110 transition-all duration-300">
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        <Edit3 className="w-6 h-6 text-white" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">Profile Settings</h2>
                  <p className="text-white/70 text-lg">Customize your profile information</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="mb-8">
            <div className="flex space-x-4">
              {['personal', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === section
                      ? 'text-white bg-white/10 shadow-lg'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10 capitalize font-medium">
                    {section} Information
                  </span>
                  {activeSection === section && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F5B03A]/20 to-[#E86C3A]/20 rounded-xl blur-sm" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Form Sections */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-3xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
              <form onSubmit={handleSubmit} className="p-8">
                {activeSection === 'personal' && (
                  <div className="grid grid-cols-2 gap-8">
                    <InputField
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      icon={<User className="w-5 h-5" />}
                      placeholder="Enter username"
                    />
                    <InputField
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      icon={<User className="w-5 h-5" />}
                      placeholder="Enter full name"
                    />
                    <InputField
                      label="Birth Date"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      icon={<Calendar className="w-5 h-5" />}
                    />
                    <InputField
                      label="Gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      icon={<User className="w-5 h-5" />}
                      type="select"
                      options={[
                        { value: '', label: 'Select Gender' },
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Other' }
                      ]}
                    />
                    <div className="col-span-2">
                      <InputField
                        label="Bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        icon={<Info className="w-5 h-5" />}
                        multiline
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                  </div>
                )}

                {activeSection === 'contact' && (
                  <div className="grid grid-cols-2 gap-8">
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      icon={<Mail className="w-5 h-5" />}
                      placeholder="Enter email"
                    />
                    <InputField
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      icon={<Phone className="w-5 h-5" />}
                      placeholder="Enter phone number"
                    />
                    <div className="col-span-2">
                      <InputField
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        icon={<MapPin className="w-5 h-5" />}
                        placeholder="Enter city"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#F5B03A] to-[#E86C3A] rounded-xl font-medium text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
                  >
                    <span className="relative z-10 flex items-center">
                      <Save className="w-5 h-5 mr-2" />
                      Save Changes
                      <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F5B03A] to-[#E86C3A] rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const InputField = ({ label, icon, type = 'text', multiline, options, ...props }) => {
  const baseClassName = "w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 pl-12 text-white placeholder-white/30 focus:border-[#F5B03A] focus:ring-[#F5B03A] transition-all duration-300";
  
  return (
    <div className="space-y-2">
      <label className="block text-white/70 font-medium text-sm">{label}</label>
      <div className="relative">
        <span className="absolute left-4 top-3.5 text-white/30">
          {icon}
        </span>
        {multiline ? (
          <textarea
            rows={4}
            className={baseClassName}
            {...props}
          />
        ) : type === 'select' ? (
          <select className={baseClassName} {...props}>
            {options.map(option => (
              <option key={option.value} value={option.value} className="bg-[#1B3A5C]">
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            className={baseClassName}
            {...props}
          />
        )}
        <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default EditProfile;
