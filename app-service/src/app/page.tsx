"use client"

import React, { useState } from "react";

const App: React.FC = () => {
  const [issueCategory, setIssueCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    location: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });
  
  const categories = [
    {
      name: "Infrastructure",
      icon: "fa-road",
      description:
          "Report issues with roads, bridges, public buildings, and other infrastructure",
    },
    {
      name: "Public Services",
      icon: "fa-water",
      description:
          "Report issues with water supply, electricity, waste management, and other public services",
    },
    {
      name: "Safety Concerns",
      icon: "fa-shield-alt",
      description:
          "Report safety hazards, dangerous situations, or security concerns",
    },
    {
      name: "Environmental Issues",
      icon: "fa-leaf",
      description:
          "Report pollution, illegal dumping, or other environmental concerns",
    },
    {
      name: "Others",
      icon: "fa-clipboard-list",
      description:
          "Report any other issues not covered by the categories above",
    },
  ];
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Member",
      text: "I reported a broken street light that had been out for months. Within a week, it was fixed! This platform really works.",
    },
    {
      name: "Michael Chen",
      role: "Local Business Owner",
      text: "The pothole outside my shop was affecting business. I reported it through the USSD code and received updates until it was repaired. Impressive service!",
    },
    {
      name: "Amina Patel",
      role: "School Teacher",
      text: "Our school crossing had no signs. I submitted a report with photos, and within 10 days, new crossing signs were installed. This platform is making our community safer.",
    },
  ];
  
  const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCategorySelect = (category: string) => {
    setFormData((prev) => ({ ...prev, category }));
    setIssueCategory(category);
    setIsDropdownOpen(false);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Report submitted successfully!");
    setFormData({
      category: "",
      location: "",
      description: "",
      name: "",
      email: "",
      phone: "",
    });
    setIssueCategory("");
  };
  
  return (
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fas fa-comments-alt text-blue-600 text-3xl mr-2"></i>
              <h1 className="text-2xl font-bold text-gray-800">CitizenConnect</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                  href="#report"
                  className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer"
              >
                Report Issue
              </a>
              <a
                  href="#track"
                  className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer"
              >
                Track Report
              </a>
              <a
                  href="#categories"
                  className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer"
              >
                Categories
              </a>
              <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer"
              >
                About
              </a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section
            className="relative overflow-hidden"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=A%20modern%20cityscape%20with%20diverse%20citizens%20engaging%20with%20government%20services%2C%20showing%20a%20community-focused%20environment%20with%20subtle%20blue%20overlay.%20The%20image%20has%20clean%20lines%20and%20a%20professional%20look%20with%20people%20of%20different%20ages%20and%20backgrounds%20in%20an%20urban%20setting&width=1440&height=600&seq=hero1&orientation=landscape')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
            }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold leading-tight mb-4">
                Your Voice Matters - Report Issues Directly to Government
              </h1>
              <p className="text-xl mb-8">
                Quick and easy way to report community issues and track government
                responses. Together, we can build a better community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                    href="#report"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Report an Issue
                </a>
                <a
                    href="#track"
                    className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Track Your Report
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Reporting Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Report Anywhere, Anytime - With or Without Internet
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue-50 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-globe text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Online Reporting</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Use our web platform to report issues with photos, detailed
                  descriptions, and precise locations. Track your reports in
                  real-time.
                </p>
                
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                        src="https://readdy.ai/api/search-image?query=A%20clean%2C%20modern%20web%20interface%20showing%20a%20report%20submission%20form%20with%20location%20map%20and%20photo%20upload%20feature.%20The%20interface%20has%20a%20blue%20and%20white%20color%20scheme%20with%20clear%20input%20fields%20and%20buttons%20on%20a%20laptop%20screen&width=600&height=400&seq=web1&orientation=landscape"
                        alt="Online reporting interface"
                        className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex justify-between">
                  <span className="text-sm text-gray-500">
                    Easy to use interface
                  </span>
                    <span className="text-sm text-gray-500">
                    Real-time updates
                  </span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a
                      href="#report"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                  >
                    Report Online Now
                  </a>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-phone-alt text-white text-xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">USSD Reporting</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  No internet? No problem. Use our USSD code to report issues from
                  any mobile phone, even without data or smartphone.
                </p>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-yellow-600">
                    *311#
                  </span>
                    <p className="text-gray-600 mt-2">
                      Dial this code from any phone
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold text-yellow-600">1</span>
                      </div>
                      <span className="text-gray-700">
                      Dial *311# on your phone
                    </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold text-yellow-600">2</span>
                      </div>
                      <span className="text-gray-700">Select issue category</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold text-yellow-600">3</span>
                      </div>
                      <span className="text-gray-700">
                      Describe issue and location
                    </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    Learn More About USSD
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Report in 3 Simple Steps
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clipboard-list text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Select Category</h4>
                  <p className="text-blue-100">
                    Choose the type of issue you want to report
                  </p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Provide Details</h4>
                  <p className="text-blue-100">Describe the issue and location</p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-paper-plane text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Submit & Track</h4>
                  <p className="text-blue-100">
                    Submit your report and track progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Issue Categories Section */}
        <section id="categories" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Issue Categories
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Select from common reportable issues or choose "Others" for anything
              not listed
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                          src={`https://readdy.ai/api/search-image?query=A%20professional%2C%20clean%20illustration%20representing%20$%7Bcategory.name%7D%20issues%20in%20urban%20settings%2C%20with%20a%20minimalist%20design%20and%20blue%20color%20scheme%20on%20white%20background%2C%20suitable%20for%20government%20reporting%20platform&width=300&height=200&seq=cat${index}&orientation=landscape`}
                          alt={category.name}
                          className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className={`fas ${category.icon} text-blue-600`}></i>
                        </div>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        {category.description}
                      </p>
                      <a
                          href="#report"
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer"
                      >
                        Report Now
                        <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Track & Response Section */}
        <section id="track" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Track Your Report
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Follow your report's journey from submission to resolution with our
              transparent tracking system
            </p>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200"></div>
                  
                  <div className="relative mb-12">
                    <div className="flex items-center mb-4">
                      <div className="z-10 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4 border-4 border-white">
                        <i className="fas fa-clipboard-check text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Submitted</h3>
                        <p className="text-gray-600">
                          Your report has been received
                        </p>
                      </div>
                      <div className="ml-auto text-green-500 font-medium">
                        <i className="fas fa-check-circle mr-1"></i> Complete
                      </div>
                    </div>
                    <div className="ml-20 bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-gray-700">
                        Report ID: #23456 has been successfully submitted. You
                        will receive a confirmation SMS shortly.
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        May 15, 2025 - 10:23 AM
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative mb-12">
                    <div className="flex items-center mb-4">
                      <div className="z-10 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4 border-4 border-white">
                        <i className="fas fa-search text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">In Review</h3>
                        <p className="text-gray-600">
                          Officials are reviewing your report
                        </p>
                      </div>
                      <div className="ml-auto text-green-500 font-medium">
                        <i className="fas fa-check-circle mr-1"></i> Complete
                      </div>
                    </div>
                    <div className="ml-20 bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-gray-700">
                        Your report has been assigned to the Department of Public
                        Works. Initial assessment is underway.
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        May 16, 2025 - 09:15 AM
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative mb-12">
                    <div className="flex items-center mb-4">
                      <div className="z-10 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4 border-4 border-white">
                        <i className="fas fa-tools text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">In Progress</h3>
                        <p className="text-gray-600">
                          Work is being done to resolve the issue
                        </p>
                      </div>
                      <div className="ml-auto text-blue-500 font-medium">
                        <i className="fas fa-clock mr-1"></i> Current Status
                      </div>
                    </div>
                    <div className="ml-20 bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-gray-700">
                        Maintenance team has been dispatched to the location.
                        Estimated completion within 48 hours.
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        May 17, 2025 - 11:30 AM
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex items-center mb-4">
                      <div className="z-10 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4 border-4 border-white">
                        <i className="fas fa-flag-checkered text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-400">
                          Resolved
                        </h3>
                        <p className="text-gray-500">Issue has been fixed</p>
                      </div>
                      <div className="ml-auto text-gray-400 font-medium">
                        <i className="fas fa-hourglass-half mr-1"></i> Pending
                      </div>
                    </div>
                    <div className="ml-20 bg-white p-4 rounded-lg shadow-sm border border-dashed border-gray-300">
                      <p className="text-gray-500">
                        This stage will be updated once the issue has been
                        resolved.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    Track Another Report
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">85%</div>
                <div className="text-gray-700 font-medium">Issues Resolved</div>
                <div className="text-gray-500 text-sm mt-2">
                  Within target timeframe
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">48hrs</div>
                <div className="text-gray-700 font-medium">Average Response</div>
                <div className="text-gray-500 text-sm mt-2">
                  Initial assessment time
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">92%</div>
                <div className="text-gray-700 font-medium">Satisfaction Rate</div>
                <div className="text-gray-500 text-sm mt-2">
                  From citizen feedback
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Social Proof Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              See how citizens like you are making a difference in their
              communities
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <i className="fas fa-user text-blue-600"></i>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                    <div className="text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
              ))}
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                Before & After
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-64 relative overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=A%20damaged%20pothole%20on%20a%20city%20street%2C%20showing%20cracked%20asphalt%20and%20water%20collection%2C%20photographed%20in%20daylight%20with%20realistic%20details%2C%20representing%20an%20urban%20infrastructure%20problem%20before%20repair&width=500&height=300&seq=before1&orientation=landscape"
                        alt="Before repair"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-0 left-0 bg-red-500 text-white px-4 py-1 font-medium">
                      Before
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">
                      Pothole on Main Street
                    </h4>
                    <p className="text-gray-600">Reported on May 1, 2025</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-64 relative overflow-hidden">
                    <img
                        src="https://readdy.ai/api/search-image?query=A%20freshly%20repaired%20road%20section%20with%20new%20smooth%20asphalt%2C%20clearly%20showing%20where%20a%20pothole%20was%20fixed%2C%20photographed%20in%20similar%20lighting%20conditions%20as%20the%20before%20image%2C%20representing%20successful%20infrastructure%20repair&width=500&height=300&seq=after1&orientation=landscape"
                        alt="After repair"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 font-medium">
                      After
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">Repaired in 7 Days</h4>
                    <p className="text-gray-600">Resolved on May 8, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Report Form */}
        <section id="report" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">
                Report an Issue
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Fill out this simple form to report an issue in your community
              </p>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Issue Category
                      </label>
                      <div className="relative">
                        <button
                            type="button"
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer !rounded-button whitespace-nowrap"
                            onClick={toggleDropdown}
                        >
                          <div className="flex justify-between items-center">
                            <span>{issueCategory || "Select Category"}</span>
                            <i
                                className={`fas fa-chevron-${isDropdownOpen ? "up" : "down"} text-gray-400`}
                            ></i>
                          </div>
                        </button>
                        
                        {isDropdownOpen && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                              {categories.map((category, index) => (
                                  <div
                                      key={index}
                                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
                                      onClick={() =>
                                          handleCategorySelect(category.name)
                                      }
                                  >
                                    <i
                                        className={`fas ${category.icon} text-blue-600 mr-2`}
                                    ></i>
                                    {category.name}
                                  </div>
                              ))}
                            </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label
                          htmlFor="location"
                          className="block text-gray-700 font-medium mb-2"
                      >
                        Location
                      </label>
                      <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter address or location description"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-medium mb-2"
                    >
                      Issue Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe the issue in detail"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Upload Photo (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <div className="mb-3">
                        <i className="fas fa-camera text-gray-400 text-3xl"></i>
                      </div>
                      <p className="text-gray-500 mb-2">
                        Drag and drop a photo here or
                      </p>
                      <button
                          type="button"
                          className="text-blue-600 font-medium cursor-pointer !rounded-button whitespace-nowrap"
                      >
                        Browse Files
                      </button>
                      <input type="file" className="hidden" accept="image/*" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label
                          htmlFor="phone"
                          className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg shadow-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Submit Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <i className="fas fa-comments-alt text-yellow-400 text-2xl mr-2"></i>
                  <h3 className="text-xl font-bold">CitizenConnect</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Bridging the gap between citizens and government for a better
                  community.
                </p>
                <div className="flex space-x-4">
                  <a
                      href="#"
                      className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                      href="#"
                      className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                      href="#"
                      className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                      href="#"
                      className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Report an Issue
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Track Your Report
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Issue Categories
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Government Departments</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Public Works
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Sanitation
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Transportation
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Public Safety
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white cursor-pointer"
                    >
                      Environmental Services
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Contact Information</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-phone-alt text-yellow-400 mr-2"></i>
                    <span className="text-gray-400">Emergency: 911</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-mobile-alt text-yellow-400 mr-2"></i>
                    <span className="text-gray-400">USSD Code: *311#</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-envelope text-yellow-400 mr-2"></i>
                    <span className="text-gray-400">
                    support@citizenconnect.gov
                  </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-headset text-yellow-400 mr-2"></i>
                    <span className="text-gray-400">Helpline: 1-800-CITIZEN</span>
                  </li>
                </ul>
                
                <div className="mt-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                    <i className="fas fa-download mr-2"></i> Download Mobile App
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; 2025 CitizenConnect. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="hover:text-white cursor-pointer">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white cursor-pointer">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white cursor-pointer">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default App;
