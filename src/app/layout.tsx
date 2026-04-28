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
  },
  twitter: {
    card: "summary",
    site: "@OblivionLabz",
    creator: "@OblivionLabz",
    title: "OblivionLabz — AI engineering, automation, sovereign tooling",
    description:
      "AI development tooling + operator-grade automation. First product: The Operator's Grimoire.",
  },
  robots: { index: true, follow: true },
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
        {children}
      </body>
    </html>
  );
}
