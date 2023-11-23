import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/header/header";
import Footer from "@/app/ui/footer";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
