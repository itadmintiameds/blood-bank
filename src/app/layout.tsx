import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blood Bank in Mysore | CurePlus Blood Bank & Donors",
  description:
    "Donate blood and save lives at CurePlus Blood Bank Mysore. Register as a donor, join blood camps, and support patients in need today.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cureplusbloodbank.com/",
  },
  icons: {
    icon: "/bloodBank.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "CurePlus Blood Bank",
    url: "https://www.cureplusbloodbank.com",
    logo: "https://www.cureplusbloodbank.com/logo.png",
    description:
      "CurePlus Blood Bank provides safe blood donation services, donor registration, blood donation camps, and blood support for patients in Mysore.",
    telephone: "+91-8214506445",
    email: "info@cureplusbloodbank.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No 59, Devanooru, Rajeev Nagar, 2nd Stage, Udayagiri",
      addressLocality: "Mysore",
      addressRegion: "Karnataka",
      postalCode: "570007",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Mysore",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}