import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/header/header";

export const metadata: Metadata = {
  title: "Skowronskigq",
  description: "Personal website of Kacper Skowronski",
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
      </body>
    </html>
  );
}
