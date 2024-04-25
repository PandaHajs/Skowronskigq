// import styles from "@/app/ui/styles/header.module.scss";
import Link from "next/link";

export default function Header() {
	return (
		<header className="h-[10%] bg-main flex items-center fixed top-0 w-screen z-10">
			<nav className="mt-4 w-8 xl:ml-72 ml-12 text-white text-xl ">
				<Link
					href="/"
					className="p-1 border-2 border-borders2 rounded-l-xl duration-75 hover:bg-borders2 hover:border-zinc-500"
				>
					Home
				</Link>
				<Link
					href="/projects"
					className="ml-1 p-1 border-2 border-borders2 duration-75  hover:bg-borders2 hover:border-zinc-500"
				>
					Projects
				</Link>
				<Link
					href="/about"
					className="ml-1 p-1 border-2 border-borders2 rounded-r-xl duration-75  hover:bg-borders2 hover:border-zinc-500"
				>
					About
				</Link>
			</nav>
		</header>
	);
}
