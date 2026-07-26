import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Study Beyond Borders (SBB) | Your Gateway to Global Education",
  description: "Premier international education consultancy offering expert guidance for foreign university admissions, 100% scholarships, visa assistance, and global career pathways in China, UK, Europe, Turkey, Malaysia, Australia, and Canada.",
  keywords: [
    "International Education Consultancy",
    "Study Abroad Agency",
    "Global University Admissions",
    "MBBS Abroad Scholarships",
    "Study in China Scholarships",
    "UK University Guidance",
    "Student Visa Advisory"
  ],
  authors: [{ name: "Study Beyond Borders" }],
  openGraph: {
    title: "Study Beyond Borders | Your Gateway to Global Education",
    description: "Handcrafted global education consulting. 5000+ Students Guided, 98% Visa Success Rate, 100+ Partner Universities.",
    url: "https://studybeyondborders.com",
    siteName: "Study Beyond Borders",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className={`${plusJakarta.className} bg-[#FAFCFF] text-[#0F172A] antialiased selection:bg-[#1E90FF]/20 selection:text-[#1E90FF]`}>
        {children}
      </body>
    </html>
  );
}
