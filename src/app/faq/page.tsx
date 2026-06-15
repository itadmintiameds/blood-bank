import type { Metadata } from "next";
import Script from "next/script";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Blood Donation FAQs | CurePlus Blood Bank Mysore",
  description:
    "Find answers to common blood donation questions, eligibility criteria, safety guidelines, and donation procedures at CurePlus Blood Bank.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cureplusbloodbank.com/faq",
  },
  openGraph: {
    title: "Blood Donation FAQs | CurePlus Blood Bank Mysore",
    description:
      "Find answers to common blood donation questions, eligibility criteria, safety guidelines, and donation procedures at CurePlus Blood Bank.",
    url: "https://www.cureplusbloodbank.com/faq",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does blood donation hurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most donors experience only a slight pinprick when the needle is inserted, and the donation process is generally comfortable.",
      },
    },
    {
      "@type": "Question",
      name: "How long does blood donation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The complete donation process typically takes 30 to 45 minutes, including registration, screening, donation, and recovery.",
      },
    },
    {
      "@type": "Question",
      name: "How often can I donate blood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whole blood donation is generally allowed every 3 months for men and every 4 months for women, subject to eligibility requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Who can donate blood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Healthy individuals aged 18 to 65 years who meet the required weight, haemoglobin, and health criteria can donate blood.",
      },
    },
    {
      "@type": "Question",
      name: "Is blood donation safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, blood donation is safe and performed using sterile, single-use equipment under professional supervision.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <FaqClient />
    </>
  );
}