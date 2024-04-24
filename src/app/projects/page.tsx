import Divider from "../ui/divider";
import styles from "./page.module.scss";
import type { Metadata } from "next";
import Project from "../ui/project";

export const metadata: Metadata = {
	title: "Projects",
};

export default function Home() {
	return (
		<Divider>
			<div className={styles.styles}>
				<Project
					title="Simple Snake"
					link="https://snake.skowronski.one/"
					description="A simple snake game created with React, TypeScript and SASS (.scss) using the Next.JS framework."
					feautred={true}
				/>
				<section className={styles.projects}>
					<Project
						title="Skowronski.one"
						link="/"
						description="My personal website, made using React, TS, SASS and the Next.JS framework."
						feautred={false}
					/>
					<Project
						title="Placeholder"
						link="/"
						description="Placeholder"
						feautred={false}
					/>
					<Project
						title="Placeholder"
						link="/"
						description="Placeholder"
						feautred={false}
					/>
					<Project
						title="Placeholder"
						link="/"
						description="Placeholder"
						feautred={false}
					/>
				</section>
			</div>
		</Divider>
	);
}
