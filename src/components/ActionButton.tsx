import React from "react";

interface Props {
  text: string;
  clickHandler: () => void | undefined;
}

const ActionButton = (props: Props) => {
  return (
    <button
      className="w-32 text-white h-9 rounded-2xl bg-frgrnd font-poppins"
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
};

export default ActionButton;
