import Link from "next/link";
import React from "react";

export default function NavLinks({
  URL,
  title,
}: {
  URL: string;
  title: string;
}) {
  return <Link href={URL}>{title}</Link>;
}
