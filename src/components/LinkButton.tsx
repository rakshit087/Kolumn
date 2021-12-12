import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link: string;
}

const LinkButton = (props: Props) => {
  return (
    <Link href={props.link}>
      <button className="w-32 h-9 font-poppins text-white bg-frgrnd">
        {props.text}
      </button>
    </Link>
  );
};

export default LinkButton;
