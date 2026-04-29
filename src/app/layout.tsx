import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://oblivionlabz.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "OblivionLabz — AI engineering, automation, sovereign tooling",
  description:
    "Senior practitioner shipping AI development tooling, agent infrastructure, and operator-grade automation from a Champaign, IL forge. First product: The Operator's Grimoire — 14 Claude Code skills, $99.",
  applicationName: "OblivionLabz",
  keywords: [
    "AI engineering",
    "Claude Code",
    "agent infrastructure",
    "automation",
    "developer tools",
    "OblivionLabz",
  ],
  authors: [{ name: "Dan Vermillion" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "OblivionLabz",
    title: "OblivionLabz — AI engineering, automation, sovereign tooling",
    description:
      "Senior practitioner shipping AI development tooling and operator-grade automation. First product: The Operator's Grimoire — $99.",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "OblivionLabz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OblivionLabz",
    creator: "@OblivionLabz",
    title: "OblivionLabz — AI engineering, automation, sovereign tooling",
    description:
      "AI development tooling + operator-grade automation. First product: The Operator's Grimoire.",
    images: ["/og-card.png"],
  },
  robots: { index: true, follow: true },
};

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OblivionLabz",
  url: "https://oblivionlabz.net",
  logo: "https://oblivionlabz.net/og-card.png",
  email: "dan.vermillion@oblivionlabz.net",
  sameAs: ["https://x.com/OblivionLabz", "https://github.com/oblivionlabz"],
  founder: { "@type": "Person", name: "Dan Vermillion" },
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Vermillion",
  jobTitle: "Founder & Senior Practitioner",
  email: "dan.vermillion@oblivionlabz.net",
  url: "https://oblivionlabz.net",
  worksFor: { "@type": "Organization", name: "OblivionLabz" },
  sameAs: ["https://x.com/OblivionLabz"],
  knowsAbout: [
    "AI engineering",
    "Claude Code",
    "automation",
    "agent infrastructure",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Champaign",
    addressRegion: "IL",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
        {children}
      </body>
    </html>
  );
}
