import { FC } from "@/types/fc";
import { CSSProperties } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

type TActiveLinkProps = { text: string; href: string };

export const ActiveLink: FC<TActiveLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  // console.log(router); //asPath

  return (
    <Link href={href}>
      <a style={asPath === href ? style : {}}> {text} </a>
    </Link>
  );
};
