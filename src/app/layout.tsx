import type { Metadata } from "next";
import "./globals.scss";
import "@/app/ui/styles/variables.scss";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { lato } from "./lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    template: "%s | Skowronski",
    default: "Home | Skowronski",
  },
  description: "Personal website of Kacper Skowronski",
  authors: [
    {
      name: "Kacper Skowronski",
      url: "https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/",
    },
  ],
  metadataBase: new URL("https://skowronski.gq"),
  keywords: [
    "Kacper Skowroński",
    "Skowrońskigq",
    "Skowroński",
    "Kacper",
    "Skowronski",
    "Kacper Skowronski",
    "Skowronskiga",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
