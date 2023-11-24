import type { Metadata } from "next";
import "./globals.scss";
import "@/app/ui/styles/variables.scss";
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer";
import { lato } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Skowronski",
  description: "Personal website of Kacper Skowronski",
  authors: [
    {
      name: "Kacper Skowronski",
      url: "https://www.linkedin.com/in/kacper-skowro%C5%84ski-854424230/",
    },
  ],
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
      </body>
    </html>
  );
}
