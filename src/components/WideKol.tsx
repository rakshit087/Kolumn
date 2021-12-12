import React from "react";

interface Props {
  title: string;
  content: string;
  author: string;
  time: number;
}

const LinkButton = (props: Props) => {
  return (
    <div className="md:w-11/12 h-36 mb-10 ">
      <p className="text-xs font-mono mb-1 text-gray-300">
        {props.author.slice(0, 5)}...
        {props.author.slice(props.author.length - 5, props.author.length)}
      </p>
      <h3 className="text-2xl font-merriweather font-semibold mb-2">
        {props.title}
      </h3>
      <p className="mb-3">{props.content}...</p>
      <p className="text-xs font-mono text-gray-400">
        {new Date(props.time).toLocaleDateString("en-US")}
        {"   "}
        {new Date(props.time).toLocaleTimeString("en-US")}
      </p>
    </div>
  );
};

export default LinkButton;
