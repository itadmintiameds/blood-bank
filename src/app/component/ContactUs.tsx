'use client';
import Link from 'next/link';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// ✅ Google Form endpoint
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSc-F83AzgGMjjZYLKU7Kyb6KQuHxoRZlNDcASj5EY1EesTJWg/formResponse';

// ✅ Field IDs (from your screenshot)
const FIELD_IDS = {
  name: 'entry.598601011',
  email: 'entry.1742269274',
  message: 'entry.319152874',
};

const ContactUsSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ UPDATED: Submit to Google Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const formBody = new FormData();
      formBody.append(FIELD_IDS.name, formData.name);
      formBody.append(FIELD_IDS.email, formData.email);
      formBody.append(FIELD_IDS.message, formData.message);

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors', // required for Google Forms
      });

      setResponseMessage('Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 px-6 lg:py-28 lg:px-8 overflow-hidden"
      id="contact"
    >
      <div className="mx-auto max-w-6xl text-center relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl animate-fade-in-up">
          Get In Touch{' '}
          <span className="bg-gradient-to-r from-red-600 to-red-700 text-transparent bg-clip-text">
            With Us
          </span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in">
          Have a question? We&apos;re here to assist you. Get in touch with our
          team for any inquiries, suggestions, or support.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start space-y-6 p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
            We&apos;re here to help!
          </h3>
          <p className="text-lg text-gray-600 max-w-md">
            Whether you’re looking for more information about our products, need
            support, or just want to chat, our team is ready to assist.
          </p>

          <div className="text-lg text-gray-600 flex gap-2">
            For quick assistance, email us at{' '}
            <div className="animate-bounce">
              <Link
                href="mailto:info@sudhanandgroup.com"
                className="text-red-600 font-semibold hover:text-red-800 transition duration-300 text-xs sm:text-sm"
              >
                info@cureplusbloodbank.com
              </Link>
            </div>
            .
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full p-8 rounded-lg shadow-lg space-y-8 max-w-lg mx-auto bg-white border border-gray-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-4 w-full bg-white border border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-4 w-full bg-white border border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="p-4 w-full bg-white border border-gray-300 rounded-lg text-zinc-900 focus:ring-orange-500 focus:ring-2"
                placeholder="Type your message here"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={
                  loading ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
                className={`rounded-md bg-gradient-to-r from-red-600 to-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${
                  loading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:from-orange-800 hover:to-orange-600'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {responseMessage && (
                <p className="mt-4 text-gray-600">{responseMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;