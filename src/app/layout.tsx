import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const heading = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Budi Agung Santoso — Senior Backend Engineer & Data Specialist",
    template: "%s | Budi Agung Santoso",
  },
  description: "Senior Backend Engineer & Data Specialist with 5+ years experience in Python (FastAPI), PHP (Laravel), SQL Server, MySQL, Oracle. Expert in ETL pipelines, REST APIs, payment gateways (Midtrans, Xendit, DOKU), Docker, and Linux. Remote-ready backend engineer based in Indonesia.",
  authors: [{ name: "Budi Agung Santoso", url: "https://budi-portfolio-mocha.vercel.app" }],
  creator: "Budi Agung Santoso",
  publisher: "Budi Agung Santoso",
  keywords: [
    "Budi Agung Santoso",
    "Senior Backend Engineer",
    "Data Specialist",
    "Python Developer",
    "FastAPI Developer",
    "PHP Developer",
    "Laravel Developer",
    "SQL Server",
    "MySQL",
    "Oracle",
    "ETL Pipeline",
    "Data Engineering",
    "REST API",
    "Payment Gateway",
    "Midtrans",
    "Xendit",
    "DOKU",
    "Docker",
    "Linux",
    "Remote Developer",
    "Indonesia Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://budi-portfolio-mocha.vercel.app",
    siteName: "Budi Agung Santoso — Portfolio",
    title: "Budi Agung Santoso — Senior Backend Engineer & Data Specialist",
    description: "Senior Backend Engineer & Data Specialist with 5+ years experience in Python (FastAPI), PHP (Laravel), SQL Server, MySQL, Oracle. Expert in ETL pipelines, REST APIs, payment gateways, Docker, and Linux. Remote-ready.",
    images: [
      {
        url: "https://budi-portfolio-mocha.vercel.app/images/profile.jpg",
        width: 400,
        height: 400,
        alt: "Budi Agung Santoso — Senior Backend Engineer & Data Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budi Agung Santoso — Senior Backend Engineer & Data Specialist",
    description: "Senior Backend Engineer & Data Specialist with 5+ years experience in Python (FastAPI), PHP (Laravel), SQL Server, MySQL, Oracle. Expert in ETL pipelines, REST APIs, payment gateways, Docker, and Linux. Remote-ready.",
    images: ["https://budi-portfolio-mocha.vercel.app/images/profile.jpg"],
    creator: "@budsantoso",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "DvrjLmGr91uMfYhxnEMTbUkCZuJcOXFQ9zW0Jlp23SI",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${heading.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/profile.jpg" />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}