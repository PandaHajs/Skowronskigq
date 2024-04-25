import { currentYear } from "../lib/age";

export default function Footer() {
	const year: number = currentYear();
	return (
		<footer className="flex items-center justify-center bg-main2 z-10 fixed bottom-0 w-screen h-[10%]">
			<p className="text-gray-600 opacity-50 text-xl">
				copyright © {year} Kacper Skowronski{" "}
			</p>
		</footer>
	);
}
