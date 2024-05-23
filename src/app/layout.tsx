import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#590209",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Uniclique",
  description:
    "Discover a tailor-made website for your business – shop and sell with ease from those you know and trust!",
  referrer: "origin-when-cross-origin",
  category: "e-commerce",
  applicationName: "Uniclique",
  authors: [
    { name: "Uniclique Team" },
    { name: "Uniclique", url: "https://uniclique-staging.vercel.app" },
  ],
  generator: "Uniclique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google",
    yahoo: "yahoo",
  },
  keywords: [
    "Ecommerce",
    "University Retail in Ibadan and Nigeria",
    "Ecommerce website",
    "Products and services in the university",
  ],
  openGraph: {
    title: "Uniclique",
    description:
      "Discover a tailor-made website for your business – shop and sell with ease from those you know and trust!",
    url: "https://uniclique-staging.vercel.app/",
    siteName: "Uniclique",
    images: [
      {
        url: "https://uniclique-staging.vercel.app/images/heroImg.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://uniclique-staging.vercel.app/images/heroImg.png",
        width: 300,
        height: 300,
      },
      {
        url: "https://uniclique-staging.vercel.app/images/heroImg.png",
        width: 1800,
        height: 1600,
        alt: "Uniclique Image",
      },
    ],
    emails: "uniclique@gmail.com",
    countryName: "Nigeria",
    phoneNumbers: "07080580497, 07048050217",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}

// favicon.ico
