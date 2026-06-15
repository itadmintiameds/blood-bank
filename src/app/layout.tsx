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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
