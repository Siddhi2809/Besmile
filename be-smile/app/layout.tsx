import type { Metadata, Viewport } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#10B9C3",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://besmilecenter.com"),
  title: "Be Smile | Child Development & Rehabilitation Centre",
  description:
    "Be Smile Child Development & Rehabilitation Centre provides child-centered developmental, therapeutic and rehabilitation services to support every child's growth and potential.",
  keywords: [
    "child development center",
    "speech therapy for kids",
    "occupational therapy children",
    "pediatric rehabilitation centre",
    "special education",
    "sensory integration",
    "early intervention therapy",
    "child physiotherapy",
    "Be Smile",
  ],
  authors: [{ name: "Be Smile Child Development Centre" }],
  openGraph: {
    title: "Be Smile | Child Development & Rehabilitation Centre",
    description:
      "Be Smile Child Development & Rehabilitation Centre provides child-centered developmental, therapeutic and rehabilitation services to support every child's growth and potential.",
    url: "https://besmilecenter.com",
    siteName: "Be Smile Child Development Centre",
    images: [
      {
        url: "/images/hero/hero-child.jpg",
        width: 1200,
        height: 900,
        alt: "Be Smile Child Development & Rehabilitation Centre",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Be Smile | Child Development & Rehabilitation Centre",
    description:
      "Child-centered developmental and rehabilitation care designed to help every child discover their potential and live a happier, brighter future.",
    images: ["/images/hero/hero-child.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#102A5C] antialiased selection:bg-[#10B9C3]/20 selection:text-[#102A5C]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
