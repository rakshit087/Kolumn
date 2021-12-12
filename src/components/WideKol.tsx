import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  key: number;
  title: string;
  content: string;
  author: string;
  time: string;
}

const LinkButton = (props: Props) => {
  return (
    <div className="md:w-11/12 h-36 mb-10 cursor-default">
      <p className="text-xs font-mono mb-1 text-gray-300">
        {props.author.slice(0, 5)}...
        {props.author.slice(props.author.length - 5, props.author.length)}
      </p>
      <Link href={"/kolumn/?kid=" + props.id.toString()}>
        <h3 className="text-2xl font-merriweather font-semibold mb-2 cursor-pointer">
          {props.title}
        </h3>
      </Link>
      <Link href={"/kolumn/?kid=" + props.id.toString()}>
        <p className="mb-3 cursor-pointer">{props.content}...</p>
      </Link>
      <p className="text-xs font-mono text-gray-400">
        {new Date(parseInt(props.time)).toLocaleDateString("en-US")}
        {"   "}
        {new Date(parseInt(props.time)).toLocaleTimeString("en-US")}
      </p>
    </div>
  );
};

export default LinkButton;
