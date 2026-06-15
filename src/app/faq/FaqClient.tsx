'use client';

import React, { useState } from 'react';
import Footer from '../component/Footer';
import HeaderNavigation from '../component/HeaderNavigation';

type FAQ = {
  question: string;
  answer: string;
};

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/about-cureplus-blood-bank', current: false },
  { name: 'Blood Facts', href: '/blood-donation-facts', current: false },
  { name: 'Can I donate', href: '/blood-donation-mysore', current: false },
  { name: 'FAQs', href: '/faq', current: true },
  { name: 'Join Us', href: '/blood-donor-registration', current: false },
];

const faqs: FAQ[] = [
  {
    question: 'Does blood donation hurt?',
    answer:
      'Most donors experience only a slight pinprick when the needle is inserted, and the donation process is generally comfortable.',
  },
  {
    question: 'How long does blood donation take?',
    answer:
      'The complete donation process typically takes 30 to 45 minutes, including registration, screening, donation, and recovery.',
  },
  {
    question: 'How often can I donate blood?',
    answer:
      'Whole blood donation is generally allowed every 3 months for men and every 4 months for women, subject to eligibility requirements.',
  },
  {
    question: 'Who can donate blood?',
    answer:
      'Healthy individuals aged 18 to 65 years who meet the required weight, haemoglobin, and health criteria can donate blood.',
  },
  {
    question: 'Is blood donation safe?',
    answer:
      'Yes, blood donation is safe and performed using sterile, single-use equipment under professional supervision.',
  },
  {
    question: 'What should I do after donating?',
    answer:
      'Drink plenty of fluids, rest, and avoid strenuous physical activity for the rest of the day. Eat iron-rich foods to help replenish your body.',
  },
  {
    question: 'Can I donate if I have a tattoo or piercing?',
    answer:
      'Yes, you can donate if it has been more than 6 months since your last tattoo or piercing and it was done at a licensed facility.',
  },
];

const FAQItem: React.FC<{
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 p-3 hover:bg-gray-50 transition duration-300 ease-in-out">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-800">
          {faq.question}
        </span>

        <span className="text-xl text-gray-500">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 pr-6 text-gray-600 transition-all duration-300 ease-in-out">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <HeaderNavigation navigation={navigation} />

      <main className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-red-700 mb-4">
            Blood Donation FAQs
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common blood donation questions, eligibility
            criteria, safety guidelines, and donation procedures at CurePlus
            Blood Bank Mysore.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}