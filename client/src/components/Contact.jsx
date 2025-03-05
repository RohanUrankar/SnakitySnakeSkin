import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-white">
            Hello.
            <br />
            Let's work together
            <br />
            on your next project.
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="min-h-screen bg-coral-300 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <Mail className="w-8 h-8 text-gray-800" />
            <h2 className="text-2xl text-gray-800 font-light">
              For commissions
              <br />
              and project inquiries,
              <br />
              please email:
            </h2>
            <a 
              href="mailto:contact@snakitysnakeskin.com" 
              className="text-blue-600 hover:text-blue-700 underline block"
            >
              contact@snakitysnakeskin.com
            </a>
            <p className="text-gray-600">or Send a message via this form</p>
          </div>

          {/* Right Column - Form */}
          <div>
            <h2 className="text-2xl text-gray-800 font-light mb-8">Contact</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-gray-600"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-gray-600"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-gray-600"
                  placeholder="Email *"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-gray-600 resize-none"
                  rows={4}
                  placeholder="Write a message"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 py-24 text-center">
        <h2 className="text-4xl font-light text-coral-300 max-w-2xl mx-auto px-6">
          Follow along on Instagram for the latest projects and updates.
        </h2>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Be</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">𝕏</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Ig</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Fb</a>
          <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">@</a>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          © 2024 by SnakitySnakeSkin
        </p>
      </footer>
    </div>
  );
};

export default Contact;