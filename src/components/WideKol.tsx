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
    <div className="mb-10 cursor-default md:w-11/12 h-36">
      <p className="mb-1 font-mono text-xs text-gray-300">
        {props.author.slice(0, 5)}...
        {props.author.slice(props.author.length - 5, props.author.length)}
      </p>
      <Link href={"/kolumn/?kid=" + props.id.toString()}>
        <h3 className="mb-2 text-2xl font-semibold cursor-pointer font-merriweather">
          {props.title}
        </h3>
      </Link>
      <Link href={"/kolumn/?kid=" + props.id.toString()}>
        <p className="mb-3 cursor-pointer">{props.content}...</p>
      </Link>
      <p className="font-mono text-xs text-gray-400">
        {new Date(parseInt(props.time)).toLocaleDateString("en-US")}
        {"   "}
        {new Date(parseInt(props.time)).toLocaleTimeString("en-US")}
      </p>
    </div>
  );
};

export default LinkButton;
