import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blood Donor Registration in Mysore | CurePlus Blood Centre",
  description:
    "Register as a blood donor in Mysore at CurePlus Blood Centre. Support voluntary blood donation and help save lives with safe blood donation.",
  alternates: {
    canonical:
      "https://www.cureplusbloodbank.com/blood-donor-registration",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}