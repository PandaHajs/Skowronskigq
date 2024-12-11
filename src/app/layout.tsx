import type { Metadata } from "next";
import "./globals.scss";
import Header from "./ui/header";
import { lato } from "./lib/fonts";

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
  metadataBase: new URL("https://skowronski.one"),
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
