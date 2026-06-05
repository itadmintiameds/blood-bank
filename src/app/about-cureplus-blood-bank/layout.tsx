import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CurePlus Blood Bank | Trusted Blood Bank Mysore",
  description: "About CurePlus Blood Bank | Trusted Blood Bank Mysore",
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
      "https://www.cureplusbloodbank.com/about-cureplus-blood-bank",
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About CurePlus Blood Bank",
    "url": "https://www.cureplusbloodbank.com/about-cureplus-blood-bank",
    "description":
      "Learn about CurePlus Blood Bank, our mission, vision, and commitment to safe blood donation and lifesaving support.",
    "mainEntity": {
      "@type": "MedicalOrganization",
      "name": "CurePlus Blood Bank",
      "url": "https://www.cureplusbloodbank.com",
      "logo": "https://www.cureplusbloodbank.com/logo.png",
      "description":
        "CurePlus Blood Bank is dedicated to providing safe blood donation services, promoting voluntary blood donation, and supporting patients in need.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mysore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mysore"
      }
    }
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