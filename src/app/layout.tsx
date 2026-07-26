import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Study Beyond Borders (SBB) | China Admissions & 100% CSC Scholarships",
  description: "Official international education consultancy connecting students to 100+ top-ranked state universities across China with 100% CSC Government Scholarships, WHO accredited MBBS, engineering, and 99% JW202 visa success.",
  keywords: [
    "Study in China Consultancy",
    "CSC Chinese Government Scholarship",
    "MBBS in China WHO Accredited",
    "Tsinghua Peking University Admissions",
    "Zhejiang University MBBS",
    "JW202 Visa Form Application",
    "Shanghai Government Scholarship"
  ],
  authors: [{ name: "Study Beyond Borders" }],
  openGraph: {
    title: "Study Beyond Borders | China Admissions & 100% CSC Scholarships Portal",
    description: "5,000+ Students Guided to China, 99% JW202 Visa Success Rate, 100+ Partner Chinese State Universities.",
    url: "https://studybeyondborders.com",
    siteName: "Study Beyond Borders 🇨🇳",
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
