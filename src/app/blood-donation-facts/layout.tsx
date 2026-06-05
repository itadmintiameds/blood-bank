import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blood Donation Facts | Myths, Benefits & Eligibility",
  description:
    "Learn important blood donation facts, benefits, eligibility, and myths. Discover how donating blood helps save lives in Mysore.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical:
      "https://www.cureplusbloodbank.com/blood-donation-facts",
  },
};

export default function FactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Blood Donation Facts",
        url: "https://www.cureplusbloodbank.com/blood-donation-facts",
        description:
          "Learn important blood donation facts, myths, benefits, and eligibility criteria.",
        publisher: {
          "@type": "MedicalOrganization",
          name: "CurePlus Blood Bank",
          url: "https://www.cureplusbloodbank.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who can donate blood?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Healthy individuals who meet the required age, weight, and health criteria can donate blood.",
            },
          },
          {
            "@type": "Question",
            name: "Is blood donation safe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, blood donation is safe and performed using sterile, single-use equipment.",
            },
          },
          {
            "@type": "Question",
            name: "How long does blood donation take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The blood donation process usually takes about 30 to 45 minutes, including registration and recovery time.",
            },
          },
          {
            "@type": "Question",
            name: "How often can I donate blood?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The interval between donations depends on local regulations and donor eligibility guidelines.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {children}
    </>
  );
}