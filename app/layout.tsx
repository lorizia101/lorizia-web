import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loriziallc.com"),
  title: "Lorizia LLC | Performance Marketing Partnerships",
  description:
    "Lorizia LLC is a Houston-based performance marketing company focused on paid search, partner acquisition, compliant landing paths, and measurable growth systems.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/lorizia-social-avatar.png",
  },
  openGraph: {
    title: "Lorizia LLC | Performance Marketing Partnerships",
    description:
      "Houston-based performance marketing for paid search, partner acquisition, compliant landing paths, and measurable growth systems.",
    url: "https://loriziallc.com/",
    siteName: "Lorizia LLC",
    images: [
      {
        url: "/lorizia-social-logo.png",
        width: 1200,
        height: 630,
        alt: "Lorizia LLC logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorizia LLC | Performance Marketing Partnerships",
    description:
      "Houston-based performance marketing for paid search, partner acquisition, compliant landing paths, and measurable growth systems.",
    images: ["/lorizia-social-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
