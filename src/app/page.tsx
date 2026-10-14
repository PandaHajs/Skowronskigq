import Card from "./ui/card";
import Divider from "./ui/divider";
import Links from "./ui/links";
import Splash from "./ui/splashes/splashes";

export default function Home() {
	return (
		<main>
			<Divider>
				<Card>
					<Splash />
				</Card>
				<Links />
			</Divider>
		</main>
	);
}
