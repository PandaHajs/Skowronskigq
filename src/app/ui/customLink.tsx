import Image from "next/image";
import Link from "next/link";

type customLinkProps = {
	icon: string;
	link: string;
	alt: string;
};

export default function CustomLink(props: customLinkProps) {
	return (
		<Link href={props.link} target="_blank">
			<Image src={props.icon} alt={props.alt} width="50" height="50" />
		</Link>
	);
}
