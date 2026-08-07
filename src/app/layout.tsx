import type { Metadata, Viewport } from "next";
import "./globals.scss";
import "@/app/ui/styles/variables.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/app/ui/footer";
import Header from "@/app/ui/header";
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

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
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
