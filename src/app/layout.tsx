import type { Metadata } from "next";
import "./globals.css";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KD Enterprises",
  description:
    "Integrated contracting solutions across CCTV surveillance, access control, IT networking, civil repairs, waterproofing, painting, and structural fabrication in Mumbai and Maharashtra.",
  founder: {
    "@type": "Person",
    name: "Mihir Gandhi",
  },
  telephone: "+917208844793",
  email: "kdenterprises2412@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 2, Sai Prasad Chawl, Prabhat Colony, Santacruz East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400055",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-20:00",
  url: "https://kdenterprises.in",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kdenterprises.in"),
  title: "KD Enterprises | Security, Infrastructure, Civil & Engineering Solutions",
  description:
    "KD Enterprises (Prop. Mihir Gandhi) provides integrated solutions across CCTV surveillance, access control, IT networking, civil repairs, waterproofing, painting, and structural fabrication in Mumbai and Maharashtra.",
  keywords: [
    "KD Enterprises",
    "Mihir Gandhi",
    "CCTV surveillance Mumbai",
    "access control systems",
    "LAN networking cabling Santacruz",
    "civil repair Mumbai",
    "waterproofing contractor Mumbai",
    "structural fabrication Mumbai",
    "RCC structural repairs",
    "painting contractor",
  ],
  authors: [{ name: "Mihir Gandhi - KD Enterprises" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "KD Enterprises | Reliable Solutions. Quality Work. Professional Service.",
    description:
      "Integrated contracting solutions across Security Systems, Electrical & Networking, Civil Works, and Structural Fabrication in Mumbai.",
    url: "https://kdenterprises.in",
    siteName: "KD Enterprises",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 antialiased min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

