'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeaderNavigation from '../component/HeaderNavigation';
import Footer from '../component/Footer';
import Script from "next/script";

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/about-cureplus-blood-bank', current: false },
  { name: 'Can I Donate?', href: '/blood-donation-mysore', current: false },
  { name: 'Blood Facts', href: '/blood-donation-facts', current: false },
  { name: 'Join Us', href: '/blood-donor-registration', current: true },
];

const JoinPage = () => {
  return (
    <>
      <HeaderNavigation navigation={navigation} />

      <main className="min-h-screen bg-white py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
  <h1 className="text-4xl font-bold text-red-700 mb-4">
    Become a Blood Donor and Save Lives
  </h1>

  <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-4">
    <p>
      Every day, patients undergoing surgeries, cancer treatments, accident
      care, childbirth, and emergency medical procedures depend on the
      availability of safe blood. By registering as a blood donor at CurePlus
      Blood Centre, you can play a vital role in saving lives and supporting
      the healthcare needs of the community.
    </p>

    <p>
      CurePlus Blood Centre is committed to promoting <strong><a href="https://www.cureplusbloodbank.com/">Blood Donation in Mysore</a></strong>
      and ensuring a safe, reliable blood supply for hospitals and patients
      across Mysore and surrounding regions. Whether you are donating for the
      first time or are a regular donor, your contribution can make a
      life-changing difference.
    </p>

    <p>
      By completing our <strong>Blood Donor Registration Form</strong>, you become
      part of a growing network of voluntary donors dedicated to helping
      patients during emergencies and critical medical situations. Your
      donation can help save lives and strengthen healthcare services
      throughout the region.
    </p>
  </div>
</div>

{/* Why Register as a Blood Donor */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-white border border-red-100 rounded-xl p-8 shadow-sm">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Why Register as a Blood Donor?
    </h2>

    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        Blood cannot be manufactured in a laboratory. It can only come from generous individuals who are willing to donate. A single blood donation can help multiple patients through the separation of blood into different components such as red blood cells, platelets, and plasma.
      </p>

      <p>
        When you complete your Voluntary Blood Donor Registration, you join a community committed to ensuring that safe blood is available whenever patients need it. Regular blood donation helps maintain adequate blood stocks and supports hospitals in providing timely treatment during emergencies.
      </p>

      <p>
        Every donation contributes to improving healthcare outcomes and gives hope to patients and families during difficult times. Your willingness to donate blood can make a meaningful difference in someone’s life.
      </p>
    </div>
  </div>
</section>

{/* Benefits of Blood Donation */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-red-50 border border-red-100 rounded-xl p-8">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Benefits of Blood Donation
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Help save lives in your community.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Support patients during medical emergencies.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Contribute to cancer treatment and recovery.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Assist individuals with thalassemia and other blood disorders.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Promote a culture of voluntary blood donation.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Help maintain adequate blood supplies for hospitals.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Receive a basic health screening before donation.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Make a positive impact through a simple act of kindness.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Support accident victims and critically ill patients.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Encourage others to participate in lifesaving initiatives.</p>
      </div>
    </div>
  </div>
</section>

{/* Who Can Register as a Blood Donor? */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-white border border-red-100 rounded-xl p-8 shadow-sm">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Who Can Register as a Blood Donor?
    </h2>

    <p className="text-gray-700 mb-6">
      You may be eligible to donate blood if you:
    </p>

    <ul className="space-y-3 text-gray-700">
      <li>✔ Are between 18 and 65 years of age.</li>
      <li>✔ Weigh at least 45 kg, as per applicable guidelines.</li>
      <li>✔ Are in good general health.</li>
      <li>✔ Meet the eligibility criteria determined during donor screening.</li>
      <li>✔ Have an adequate hemoglobin level.</li>
      <li>✔ Have not donated blood within the restricted donation interval.</li>
    </ul>

    <p className="text-gray-700 mt-6">
      Our medical team will conduct a brief health assessment before donation to ensure the safety of both donors and recipients.
    </p>
  </div>
</section>

{/* Safe and Simple Blood Donation Process */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-red-50 border border-red-100 rounded-xl p-8">
    <h2 className="text-3xl font-bold text-red-700 mb-4">
      Safe and Simple Blood Donation Process
    </h2>

    <p className="text-gray-700 mb-8">
      At CurePlus Blood Centre, donor safety is our priority. The donation process follows strict quality, safety, and hygiene standards.
    </p>

    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold shrink-0">
          1
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Step 1: Donor Registration
          </h3>
          <p className="text-gray-700">
            Complete the Blood Donor Registration Form with your basic personal and contact details.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold shrink-0">
          2
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Step 2: Health Screening
          </h3>
          <p className="text-gray-700">
            A qualified healthcare professional will conduct a brief health assessment and review your medical history.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold shrink-0">
          3
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Step 3: Blood Donation
          </h3>
          <p className="text-gray-700">
            The donation process is safe, comfortable, and typically takes only a few minutes. Sterile and single-use equipment is used for every donor.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold shrink-0">
          4
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Step 4: Refreshment and Recovery
          </h3>
          <p className="text-gray-700">
            After donation, donors are provided with refreshments and advised to rest briefly before resuming their normal activities.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white font-bold shrink-0">
          5
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            Step 5: Save Lives
          </h3>
          <p className="text-gray-700">
            Your donated blood is carefully tested, processed, and made available to patients in need across hospitals and healthcare facilities.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Support Blood Donation in Mysore */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-white border border-red-100 rounded-xl p-8 shadow-sm">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Support Blood Donation in Mysore
    </h2>

    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        Blood Donation in Mysore is essential for supporting hospitals, trauma care centers, maternity services, cancer treatment facilities, and patients requiring regular blood transfusions. Every unit of donated blood can help multiple patients through blood component separation.
      </p>

      <p>
        At CurePlus Blood Centre, we encourage individuals, families, students, professionals, and community groups to participate in blood donation and help maintain a stable blood supply for Mysore and surrounding regions.
      </p>

      <p>
        Regular donations ensure that blood remains available for patients during emergencies and planned medical procedures.
      </p>
    </div>
  </div>
</section>

{/* Why Choose CurePlus Blood Centre in Mysore? */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-red-50 border border-red-100 rounded-xl p-8">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Why Choose CurePlus Blood Centre in Mysore?
    </h2>

    <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
      <p>
        CurePlus Blood Centre is a trusted Blood Bank in Mysore dedicated to ensuring safe blood collection, testing, storage, and distribution.
      </p>

      <p className="font-semibold text-gray-900">
        Our Commitment Includes:
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Safe and hygienic donation procedures.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Experienced healthcare professionals.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Advanced blood collection and processing facilities.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Strict quality and safety protocols.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Reliable blood component preparation and storage.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Community-focused awareness programs.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Regular voluntary blood donation drives.</p>
      </div>

      <div className="flex items-start gap-3">
        <span>✔</span>
        <p>Support for hospitals and patients across Mysore.</p>
      </div>
    </div>

    <p className="text-gray-700 mt-8">
      As a leading Blood Centre Mysore, we strive to build a strong network of voluntary blood donors and ensure the availability of safe blood for all patients who need it.
    </p>
  </div>
</section>

{/* Blood Donation Camps in Mysore */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-white border border-red-100 rounded-xl p-8 shadow-sm">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Blood Donation Camps in Mysore
    </h2>

    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        CurePlus Blood Centre regularly organizes and supports Blood Donation Camp Mysore initiatives in collaboration with educational institutions, corporate organizations, NGOs, healthcare facilities, and community groups.
      </p>

      <p>
        These camps help spread awareness about the importance of blood donation while making it easier for eligible donors to contribute to society. Through regular donation camps, we work towards maintaining a sufficient blood supply for hospitals and patients throughout the region.
      </p>

      <p>
        Organizations interested in conducting a blood donation camp can contact our team for assistance and support.
      </p>
    </div>
  </div>
</section>

{/* Areas We Serve */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-red-50 border border-red-100 rounded-xl p-8">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Areas We Serve
    </h2>

    <p className="text-gray-700 mb-6">
      CurePlus Blood Centre proudly serves donors and healthcare institutions across:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
      <div>✔ Mysore (Mysuru)</div>
      <div>✔ Nanjangud</div>
      <div>✔ Srirangapatna</div>
      <div>✔ Hunsur</div>
      <div>✔ Mandya</div>
      <div>✔ Bannur</div>
      <div>✔ T. Narasipura</div>
      <div>✔ K.R. Nagar</div>
      <div>✔ Periyapatna</div>
      <div>✔ Nearby towns and villages across Karnataka</div>
    </div>

    <p className="text-gray-700 mt-6">
      Our mission is to ensure the availability of safe blood for patients throughout Mysore and neighboring communities.
    </p>
  </div>
</section>

{/* Looking to Donate Blood Near Me? */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-white border border-red-100 rounded-xl p-8 shadow-sm">
    <h2 className="text-3xl font-bold text-red-700 mb-6">
      Looking to Donate Blood Near Me?
    </h2>

    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        If you are searching for &quot;Donate Blood Near Me&quot;, CurePlus Blood Centre welcomes healthy and eligible donors to join our lifesaving mission.
      </p>

      <p>
        Our team provides a safe, comfortable, and professional donation experience while following strict medical and safety guidelines. Every donation helps support patients undergoing surgeries, trauma care, cancer treatment, maternity care, and emergency medical procedures.
      </p>

      <p>
        By becoming a registered donor, you help ensure that safe blood is available whenever and wherever it is needed.
      </p>
    </div>
  </div>
</section>

{/* Join Our Mission to Save Lives */}
<section className="max-w-5xl mx-auto mb-16">
  <div className="bg-red-700 text-white rounded-xl p-10 text-center">
    <h2 className="text-3xl font-bold mb-6">
      Join Our Mission to Save the Lives
    </h2>

    <div className="max-w-4xl mx-auto space-y-4 text-red-50 leading-relaxed">
      <p>
        Thousands of patients require blood transfusions every year. Your decision to register as a blood donor today can help ensure that safe blood is available when it is needed most.
      </p>

      <p>
        Whether you are an individual donor, part of a corporate organization, educational institution, healthcare institution, or community group, we welcome your support in strengthening the blood donation movement in Mysore.
      </p>

      <p>
        By becoming a registered donor, you will receive updates about upcoming blood donation drives, awareness programs, community initiatives, and opportunities to contribute to lifesaving causes.
      </p>

      <p>
        Your contribution can save lives, support families, and strengthen healthcare services across Mysore and Karnataka.
      </p>

      <p className="font-semibold text-white">
        Register today through our Blood Donor Registration Form and become a part of the lifesaving mission at CurePlus Blood Centre.
      </p>
    </div>
  </div>
</section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Donor Card */}
          <motion.div 
            className="border border-red-200 rounded-xl p-6 shadow-md hover:shadow-xl transition bg-red-50"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-2">🩸 Sign Up as a Donor</h2>
            <p className="text-gray-700 mb-4 text-sm">
              Your blood donation can save up to three lives. It’s quick, safe, and one of the most generous acts you can do.
            </p>
            <ul className="text-left text-gray-600 text-sm mb-6 list-disc list-inside">
              <li>Donate at your convenience</li>
              <li>Get regular health checkups</li>
              <li>Help in emergency situations</li>
            </ul>
            <Link href="/donor-form">
              <button className="bg-red-700 text-white px-5 py-2 rounded-lg hover:bg-red-800 transition">
                Become a Donor
              </button>
            </Link>
          </motion.div>

          {/* Volunteer Card */}
          <motion.div 
            className="border border-red-200 rounded-xl p-6 shadow-md hover:shadow-xl transition bg-red-50"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-2">🤝 Join as a Volunteer</h2>
            <p className="text-gray-700 mb-4 text-sm">
              Help us spread awareness, organize donation camps, and support our events. No medical background needed—just a kind heart.
            </p>
            <ul className="text-left text-gray-600 text-sm mb-6 list-disc list-inside">
              <li>Community outreach programs</li>
              <li>Event and logistics support</li>
              <li>Assist blood drive coordination</li>
            </ul>
            <Link href="/volunteer-form">
              <button className="bg-red-700 text-white px-5 py-2 rounded-lg hover:bg-red-800 transition">
                Become a Volunteer
              </button>
            </Link>
          </motion.div>
        </div>
      </main>


<Script
  id="blood-donor-registration-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id":
          "https://www.cureplusbloodbank.com/blood-donor-registration",
        "url":
          "https://www.cureplusbloodbank.com/blood-donor-registration",
        "name":
          "Blood Donor Registration in Mysore | CurePlus Blood Centre",
        "description":
          "Register as a blood donor in Mysore at CurePlus Blood Centre. Join our lifesaving mission and help provide safe blood for patients in need.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "name": "CurePlus Blood Centre",
          "url": "https://www.cureplusbloodbank.com"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "CurePlus Blood Centre",
        "url": "https://www.cureplusbloodbank.com",
        "logo": "https://www.cureplusbloodbank.com/logo.png",
        "description":
          "CurePlus Blood Centre is a trusted blood bank in Mysore providing blood donation, donor registration, blood component services and blood donation camps.",
        "medicalSpecialty": "Blood Banking",
        "areaServed": {
          "@type": "City",
          "name": "Mysore"
        },
        "address": {
  "@type": "PostalAddress",
  "streetAddress": "Dakshina Murthy Towers 59, Ground Floor, Devanooru, Rajeev Nagar, 2nd Stage, Udayagiri",
  "addressLocality": "Mysuru",
  "addressRegion": "Karnataka",
  "postalCode": "570019",
  "addressCountry": "IN"
}
,
        "telephone": "+91-08214506445"
      }
    ]),
  }}
/>
      <Footer />
    </>
  );
};

export default JoinPage;
