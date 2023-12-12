import Image from "next/image";

export default function Link({
  icon,
  link,
  alt,
}: {
  icon: any;
  link: string;
  alt: string;
}) {
  return (
    <a href={link} target="_blank">
      <Image src={icon} alt={alt} width="50" height="50" />
    </a>
  );
}
