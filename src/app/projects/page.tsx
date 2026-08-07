import type { Metadata } from "next";
import Divider from "../ui/divider";
import Project from "../ui/project";
import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Projects",
};

export default function Home() {
	return (
		<Divider>
			<div className={styles.container}>
				<h2>Personal Projects</h2>
				<section className={styles.projects}>
					<Project
						title="Simple Snake"
						link="https://snake.skowronski.one/"
						description="A simple snake game created with React, TypeScript and SASS using the Next.JS framework."
					/>
					<Project
						title="Personal Website"
						link="/"
						description="My personal website, made using React, TS, SASS and the Next.JS framework."
					/>
					<Project
						title="Simple Clicker"
						link="https://clicker.skowronski.one/"
						description="Simple clicker game made with NextJS, Flask and PostgreSQL, also using websockets."
					/>
				</section>
				<div>
					<h2>Team Projects</h2>
					<section className={styles.projects}>
						<Project
							title="wosp-puszki"
							link="https://github.com/akai-org/wosp-puszki"
							description="App for managing the collection of money during the WOSP event at PUT."
						/>
						<Project
							title="DoDo App"
							link="https://github.com/akai-org/dodo"
							description="App for managing tasks and projects for teams."
						/>
					</section>
				</div>
			</div>
		</Divider>
	);
}
